import React, {
    useState,
    useEffect
} from 'react';
import ReactDOM, { render } from 'react-dom';
import Select from 'react-select';
import {RadioButton} from "./Controls";
import {GridStateFilter} from "./Grid";

interface Filter extends GridStateFilter {
    label: string
    value: any
    onChange: Function
    placeholder: string
    onRequestAction: Function|null
}

interface FilterTextProps {
    controlClassName: string|null
    onSubmit: Function
}

export const FilterText = (props: Filter & FilterTextProps) => {
    const changed = (e: React.KeyboardEvent<HTMLInputElement>) => {
       if (e.keyCode === 13) {
           props.onSubmit();
       }
    };
    return (
        <div className="grid-filter-ctrl grid-filter-text">
            {props.label ? (
                <label>{props.label}</label>
            ) : null}
            <input type="text" 
                className={props.controlClassName ? props.controlClassName : 'form-control'}
                name={props.name}
                value={props.value}
                placeholder={props.placeholder}
                onChange={e => props.onChange(e.target.value)}
                onKeyUp={changed} />
        </div>
    )
}

export const FilterSelect = (props: Filter & {
    options: any
}) => {
    return (
        <div className="grid-filter-ctrl grid-filter-select">
            {/*<Select
                isSearchable={true}
                blurInputOnSelect={false}
                closeMenuOnSelect={true}
                options={this.state.options.length > 0 ? this.state.options : this.props.options}
                getOptionLabel={(option: any) => { return option.label; }}
                getOptionValue={(option: any) => { return option.value; }}
                options={[
                    { label: 'AAA AAA', value: 'a' },
                    { label: 'BBB BBB', value: 'b' },
                ]}
                value="a"
            />*/}
            {!!props.label && (
                <label>{props.label}</label>
            )}
            <select className="form-control">
                {props.options.map((item: any) => (
                    <option value={item[0]} key={item[0]}>{item[1]}</option>
                ))}
            </select>
        </div>
    )
}

export const FilterRadio = (props/*: Filter & {
    options: any

}*/) => {
    return (
        <div className="grid-filter-ctrl grid-filter-radio">
            {props.label ? <label>{props.label}</label> : null}
            <RadioButton
                onChange={(ev) => {
                    props.onChange(ev)
                }}
                options={props.options.map((x: any) => {
                    return {value: x[0], label: x[1]}
                })}
                value={props.value}
            />
        </div>
    )
}

export const LazySelectFilter = (props: Filter & {
    isLoaded?: boolean
    loadOnce: boolean
    onRequestAction: Function //(data: object) => any
    onChange: (data: any) => any
    placeholder: string
    options: Array<{
        label: string
        value: string
    }>
}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const onToggle = (): void => {
        setIsOpen(true);
        if (!props.isLoaded || !props.loadOnce) {
            setIsLoading(true);
            props.onRequestAction({
                'action': props.name+'.load',
            })
        }
    };
    useEffect(() => {
        if (props.isLoaded) {
            setIsLoading(false);
        }
    }, [props.isLoaded]);
    return (
        <div className="grid-filter-ctrl grid-filter-select">
            {!!props.label && (
                <label>{props.label}</label>
            )}
            <Select 
                placeholder={props.placeholder}
                onMenuOpen={onToggle}
                onMenuClose={() => setIsOpen(false)}
                menuIsOpen={isOpen}
                isSearchable={true}
                isLoading={isLoading}
                blurInputOnSelect={false}
                closeMenuOnSelect={true}
                options={props.options.length > 0 ? props.options
                    : props.value.length > 0
                    ? props.value
                    : props.options}
                getOptionLabel={(option) => { return option.label; }}
                getOptionValue={(option) => { return option.value; }}
                onChange={(e: any) => props.onChange([e])}
                value={props.value}
            />
        </div>
    )
}

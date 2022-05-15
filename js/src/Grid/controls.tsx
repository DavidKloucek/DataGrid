import React, {SyntheticEvent, useEffect, useState} from 'react';

type RadioButtonProps = {
    value?: string|undefined
    defaultValue?: string|undefined
    onChange: (val: any) => void
    options: Array<{
        label: string
        value: string
    }>
}

export const RadioButton = (props: RadioButtonProps) => {
    const [value, setValue] = useState<any>(null);

    useEffect(() => {
        setValue(props.value !== undefined ? props.value : props.defaultValue);
    }, []);

    const onChanged = (e: SyntheticEvent<HTMLInputElement>) => {
        if (props.value === undefined) {
            setValue(e.currentTarget.value);
        }
        if (typeof props.onChange === 'function') {
            props.onChange(e.currentTarget.value);
        }
    }

    const currValue = props.value !== undefined 
            ? String(props.value) 
            : value !== undefined
            ? String(value)
            : undefined;

    return (
        <div className="btn-group btn-radiogroup col-md-5" data-toggle="buttons">
            {props.options.map(opt => (
                <label className={'btn btn-default '+(currValue == String(opt.value) ? 'checked' : '')} 
                    key={opt.value}>
                    <input onChange={onChanged} 
                        type="radio" 
                        checked={currValue == String(opt.value)}
                        value={opt.value} /> {opt.label}
                </label>
            ))}
        </div>
    )
}

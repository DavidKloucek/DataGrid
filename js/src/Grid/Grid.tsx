import React, { useState, useEffect, useContext, Children, ReactElement, Fragment, useCallback, useRef, useImperativeHandle, forwardRef, SyntheticEvent } from 'react'
import ReactDOM, { render } from 'react-dom'
import classnames from "classnames"
import {FilterRadio, FilterSelect, FilterText, LazySelectFilter} from "./filters"
import {Border, Collapsible} from "../components"
import {Paginator} from "./Paginator"
import {GridColumnSettings} from "./GridColumnSettings"

const assemblyFromState = (state: any) => {
    let data = {
        defaultPageSize: state.defaultPageSize,
        sortBy: state.sortBy,
        sortOrder: state.sortOrder,
        page: state.page,
        filters: state.filters.map(filter => ({
            name: filter.name,
            value: filter.value
        }))
    }
    return data
}

interface GridProps {
    grid: any
}

interface GridState {
    url: string
    baseUrl: string
    action: string|null
    sortBy: string|null
    sortOrder: string
    totalCount: number
    pageCount: number
    page: number
    pageSizeOptions: number[]
    defaultPageSize: number
    pages: number
    isFirst: boolean
    isLast: boolean
    isFilterActive: boolean
    filters: Array<GridStateFilter>
    columns: Array<GridStateColumns>
    rows: Array<Row>
}

export interface GridStateFilter {
    name: string
    label: string
    value: any
    type: string
    placeholder: any
}

export interface GridStateColumns {
    isSortable: boolean
    isVisible: boolean
    name: string
    label: string
    type: string
    align: string
}

interface Row {
    id: number
    [key: string]: any
}

const mergeFilters = (newFilters, oldFilters) => {
    const list = []
    for (let newFilter of newFilters) {
        let oldOne = oldFilters.find(o => o.nam === newFilter.name)
        if (oldOne !== undefined) {
            newFilter = {...oldOne, ...newFilter}
        }
        // @ts-ignore
        list.push(newFilter)
    }
    return list
}

export const Grid = (props: GridProps) => {
    const [state, setState] = useState<GridState>(props.grid)
    let { rows, columns } = state
    //let [columns, setColumns] = useState([])
    //let [rows, setRows] = useState([])
    let [isLoading, setIsLoading] = useState<boolean>(false)
    let [checkedRows, setCheckedRows] = useState<number[]>([])

    const checkRow = (id: number) => {
        let exists = checkedRows.includes(id)
        if (!exists) {
            setCheckedRows(checkedList => checkedList.concat(id))
        } else {
            setCheckedRows(checkedList => {
                return checkedList.filter(y => {
                    return !(exists && y === id)
                })
            })
        }
    }

    const toggleCheckAll = (): void => {
        if (checkedRows.length <= rows.length) {
            setCheckedRows(rows.map(x => x.id))
        } else {
            setCheckedRows([])
        }
    }

    const changeSort = (colKey: string): void => {
        let o = {
            ...assemblyFromState(state),
            sortBy: colKey,
            sortOrder: colKey === state.sortBy ? (state.sortOrder === 'asc' ? 'desc' : 'asc') : 'desc',
            action: 'submit',
        }
        // @ts-ignore
        fetchData(o)
    }

    const changeLimit = (l: number): void => {
        setState(s => ({...s, defaultPageSize: l}))
        let o = {
            ...assemblyFromState(state),
            defaultPageSize: l,
            action: 'submit',
        }
        // @ts-ignore
        fetchData(o)
    }

    const goToPage = (n: number): void => {
        let o = {
            ...assemblyFromState(state),
            page: n,
            action: 'submit',
        }
        // @ts-ignore
        fetchData(o)
    }

    const onChangeFilter = (filterKey: string, value: any) => {
        setState(s => ({...s,
            filters: s.filters.map(f => {
                if (f.name === filterKey) {
                    return {...f, value}
                }
                return f
            })
        }))
    }

    const submitFilters = (): void => {
        let o = {
            ...assemblyFromState(state),
            action: 'submit',
        }
        // @ts-ignore
        fetchData(o)
    }

    const onRequestAction = (data: object): void => {
        let o = {
            //...assemblyFromState(state),
            //action: 'submit',
            ...data,
            filters: state.filters
        }
        // @ts-ignore
        fetchData(o)
    }

    const resetFilter = (): void => {
        let o = {
            ...assemblyFromState(state),
            action: 'submit',
            filters: []
        }
        // @ts-ignore
        fetchData(o)
    }

    const fetchData = (o: GridState) => {
        setIsLoading(true)
        let params = {
            ...o
        }

        o.filters = o.filters.map(x => {
            return {...x, options: []}
        })

        let rqurl = state.baseUrl+encodeURIComponent(JSON.stringify(params))

        fetch(rqurl, {
                method: 'GET',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            })
            .then(res => res)
            .then(res => res.json())
            .then(data => {
                const {filters, ...other} = data.state

                setState(s => ({...s, ...other, filters: mergeFilters(filters, s.filters)}))

                setIsLoading(false)

                window.history.pushState({path: data.state.url},'', data.state.url)
            })
    }

    // separate to a view component

    // @ts-ignore
    return (
        <div className="grid">
            <div className="grid-head">
                <Collapsible showTitle="Column settings">
                    <Border>
                        <GridColumnSettings
                            list={state.columns}
                            onRequestAction={onRequestAction}
                        />
                    </Border>
                </Collapsible>
            </div>
            <div className="grid-filters">
                {state.filters.map(filter => (
                    <div className="grid-filter" key={filter.name}>
                        {filter.type === 'FilterRadio' ? (
                            <>
                            <FilterRadio
                                {...filter}
                                onChange={(v: any) => onChangeFilter(filter.name, v)}
                            />
                            </>
                        ) : filter.type === 'LazySelectFilter' ? (
                            <LazySelectFilter
                                loadOnce={false}
                                options={[]}
                                onChange={(v: any) => onChangeFilter(filter.name, v)}
                                onRequestAction={onRequestAction}
                                {...filter}
                            />
                        ) : filter.type === 'FilterText' ? (
                            <FilterText
                                controlClassName={null}
                                {...filter}
                                onChange={(v: any) => onChangeFilter(filter.name, v)}
                                onRequestAction={onRequestAction}
                                onSubmit={() => {
                                }}
                            />
                        ) : null}
                    </div>
                ))}
                {state.filters.length > 0 && (
                    <button type="button" className="btn btn-primary" onClick={submitFilters}>Filter</button>
                )}
                {state.isFilterActive && (
                    <button type="button" className="btn btn-danger" onClick={resetFilter}>Reset</button>
                )}
            </div>
            {isLoading && (
                <>
                    <div className="grid-loading">Loading..</div>
                </>
            )}
            <Paginator {...state} changeLimit={changeLimit} goToPage={goToPage} />
            <table className="grid-table">
                <thead>
                    <tr>
                    <th><input type="checkbox" onClick={toggleCheckAll} /> </th>
                    {columns.map(col => (
                       <th key={col.name} className={classnames({'sortable': col.isSortable})}>
                           {col.isSortable ? (
                               <span onClick={() => changeSort(col.name)}>
                                   {col.label}
                                   {col.name === state.sortBy && (
                                       <span>{state.sortOrder === 'asc' ? '↑' : '↓'}</span>
                                   )}
                               </span>
                           ) : (
                               <span>{col.label}</span>
                           )}
                       </th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                {rows.map(row => (
                    <tr key={row.id}>
                        <td><input type="checkbox" value="1" checked={checkedRows.includes(row.id)} onChange={() => checkRow(row.id)} /></td>
                        {columns.map(col => (
                            <td key={col.name}>
                                {(typeof row[col.name] === 'string' || typeof row[col.name] === 'number') ? (
                                    <>{row[col.name]}</>
                                ) : ('__html_'+col.name in row) ? (
                                    <div dangerouslySetInnerHTML={{__html: row['__html_'+col.name]}}></div>
                                ) : null}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
            <Paginator {...state} changeLimit={changeLimit} goToPage={goToPage} />
        </div>
    )
}

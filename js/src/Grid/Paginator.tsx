import React, {  } from 'react';
import ReactDOM, { render } from 'react-dom';

type PaginatorProps = {
    goToPage: (n: number) => void,
    changeLimit: (n: number) => void,
    defaultPageSize: number,
    isFirst: boolean,
    isLast: boolean,
    page: number,
    pageSizeOptions: number[],
    totalCount: number
}

export const Paginator = ({
    goToPage,
    changeLimit,
    defaultPageSize,
    isFirst,
    isLast,
    page,
    pageSizeOptions,
    totalCount
}: PaginatorProps) => {
    return (
        <div className="grid-paginator">
            <button className="btn btn-default btn-sm" onClick={() => goToPage(page-1)} disabled={isFirst}>Prev</button>
            <button className="btn btn-default btn-sm">{page}</button>
            <button className="btn btn-default btn-sm" disabled={isLast} onClick={() => goToPage(page+1)}>Next</button>
            <select className="form-control" value={defaultPageSize} onChange={(l) => changeLimit(Number(l.target.value))}>
                {pageSizeOptions.map(n => (
                    <option key={n} value={n}>{n}</option>
                ))}
            </select>
            <label>Total rows: {totalCount}</label>
        </div>
    )
}

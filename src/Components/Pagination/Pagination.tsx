import React from 'react';
import ReactPaginate from "react-paginate";
import s from './Pagination.module.scss'
type PaginationProps = {
    currentPage: number;
    onChangePage: (page: number) => void;
};
const Pagination = (props:PaginationProps) => {
    return (
        <ReactPaginate
                       className={s.root}
                       breakLabel="..."
                       nextLabel=">"
                       previousLabel="<"
                       onPageChange={(event) => props.onChangePage(event.selected + 1)}
                       pageRangeDisplayed={4}
                       pageCount={3}
                       forcePage={props.currentPage - 1}/>
    );
};

export default Pagination;
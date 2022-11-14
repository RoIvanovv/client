import ReactPaginate from "react-paginate";
import './Components.scss'
import React from 'react';


const Pager = ({countPage, setActivePage}) => {

  return (
    <ReactPaginate
      className="pagination pager"
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => setActivePage(event.selected+1)}
      pageRangeDisplayed={3}
      pageCount={countPage}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pager;

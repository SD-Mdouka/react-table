import React from "react";
import ReactPaginate from "react-paginate";

const Pageination = () => {
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        // onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        // pageCount={pageCount}
        previousLabel="< previous"
        // renderOnZeroPageCount={0}
      />
    </div>
  );
};

export default Pageination;

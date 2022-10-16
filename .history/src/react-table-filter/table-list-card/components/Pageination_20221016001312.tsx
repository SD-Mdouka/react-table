import React from "react";
import { Pagination } from "react-bootstrap";
import ReactPaginate from "react-paginate";

const Pageination = () => {
  const handlePageClick = () => {};
  const pageCount = 500;
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
      />
    </div>
  );
};

export default Pageination;

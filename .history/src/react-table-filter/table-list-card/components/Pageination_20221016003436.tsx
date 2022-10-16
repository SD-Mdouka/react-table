import React from "react";
import { Pagination } from "react-bootstrap";
import ReactPaginate from "react-paginate";

const Pageination = ({ getPage }: any) => {
  const handlePageClick = (data: any) => {
    getPage(data.selected + 1);
  };
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
        containerClassName={"pagination justify-content-cneter p-2"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-item"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Pageination;

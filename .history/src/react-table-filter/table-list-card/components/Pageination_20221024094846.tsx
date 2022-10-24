import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getPage } from "../redux/actions/moviesAction";

const Pageination = () => {
  const [countPages, setCountPages] = useState(0);
  //import store
  const dispatch = useDispatch();
  //store data
  const dataPageCount = useSelector((state: any) => state.pageCount);
  //In hooks is start all function
  useEffect(() => {
    console.log(dataPageCount);
    setCountPages(dataPageCount);
  }, []);
  const handlePageClick = (data: any) => {
    dispatch(getPage(data.selected + 1));
  };
  const pageCount = countPages;
  console.log(pageCount + "0");
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
        pageLinkClassName={"page-link"}
        breakLinkClassName={"page-link"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        pageClassName={"page-item"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        breakClassName={"page-item"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Pageination;

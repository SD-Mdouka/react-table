import React from "react";
import { Provider } from "react-redux/es/exports";
import TableCard from "./react-table-filter/table-list-card";
import { storeMovies } from "./react-table-filter/table-list-card/redux/store";
import TableMenu from "./react-table-filter/table-menu";

export const App = () => {
  return (
    <>
      <Provider store={storeMovies}>
        <TableCard />
      </Provider>
    </>
  );
};

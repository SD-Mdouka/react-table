import { createStore } from "redux";

//
const initialState: any = {
  ListMovies: [],
};
//import reducer
const moviesReducer = ({ state = initialState, action }: any) => {
  switch (action.type) {
    case ALLMOVIES:

    default:
  }
};
//1 - create store
const store = createStore();

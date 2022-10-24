import { createStore } from "redux";
import { moviesReducer } from "../reducer/moviesReducer";
import { ALLMOVIES } from "../types/movieType";

//1 - create store
const store = createStore(moviesReducer);

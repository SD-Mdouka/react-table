import { createStore } from "redux";
import { moviesReducer } from "../reducer/moviesReducer";

//1 - create store
export const storeMovies = createStore(moviesReducer);

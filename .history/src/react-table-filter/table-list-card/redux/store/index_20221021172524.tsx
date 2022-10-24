import { createStore } from "redux";
import { moviesReducer } from "../reducer/moviesReducer";
import { composeWithDevTools } from "redux-devtools-extension";

//1 - create store
export const storeMovies = createStore(moviesReducer, composeWithDevTools());

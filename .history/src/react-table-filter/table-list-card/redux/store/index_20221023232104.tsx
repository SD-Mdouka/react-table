import { createStore, applyMiddleware } from "redux";
import { moviesReducer } from "../reducer/moviesReducer";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

//1 - create store
export const storeMovies = createStore(moviesReducer, applyMiddleware(thunk));

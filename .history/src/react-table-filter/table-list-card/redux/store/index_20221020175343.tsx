import { createStore } from "redux";
import { moviesReducer } from "../reducer/moviesReducer";

//1 - create store
const store = createStore(moviesReducer);

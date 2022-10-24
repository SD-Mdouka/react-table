import { Action } from "@remix-run/router";
import { ALLMOVIES } from "../types/movieType";

interface Movie {
  type: string;
  data: [];
}
//initel value
const initialState: any = {
  ListMovies: [],
};
//3 - import reducer
export const moviesReducer = (state = initialState, { type, data }: any) => {
  switch (type) {
    case "ALLMOVIES":
      return {
        ListMovies: data,
      };
    default:
      return state;
  }
};

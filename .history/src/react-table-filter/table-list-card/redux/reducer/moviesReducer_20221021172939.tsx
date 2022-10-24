import { ALLMOVIES } from "../types/movieType";

//initel value
const initialState: any = {
  ListMovies: [],
};
//3 - import reducer
export const moviesReducer = (
  state = {
    ListMovies: [],
  },
  { action }: any
) => {
  switch (action.type:string) {
    case ALLMOVIES:
      return {
        ListMovies: action.data,
      };
    default:
      return state;
  }
};

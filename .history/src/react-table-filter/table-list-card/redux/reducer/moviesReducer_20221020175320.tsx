import { ALLMOVIES } from "../types/movieType";

//initel value
const initialState: any = {
  ListMovies: [],
};
//3 - import reducer
export const moviesReducer = ({ state = initialState, action }: any) => {
  switch (action.type) {
    case ALLMOVIES:

    default:
  }
};

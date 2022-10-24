import { ALLMOVIES } from "../types/movieType";

//initel value
const initialState: any = {
  ListMovies: [],
  PageCount: 0,
};
//3 - import reducer
export const moviesReducer = ({ state = initialState, action }: any) => {
  switch (action.type) {
    case ALLMOVIES:
      return {
        ListMovies: action.data,
      };
    default:
      return state;
  }
};

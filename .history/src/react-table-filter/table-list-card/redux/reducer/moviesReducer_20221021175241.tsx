import { ALLMOVIES } from "../types/movieType";

//initel value
const initialState: any = {
  ListMovies: [],
};
//3 - import reducer
export const moviesReducer = (state = initialState, { action }: any) => {
  console.log([action]);
  switch ("ALLMOVIES") {
    case "ALLMOVIES":
      return {
        ListMovies: [],
      };
    default:
      return state;
  }
};

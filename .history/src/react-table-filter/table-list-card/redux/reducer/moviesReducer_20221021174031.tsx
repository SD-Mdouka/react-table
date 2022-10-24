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
  console.log([action]);
  if (action.type === "ALLMOVIES") {
    return {
      ListMovies: action.data,
    };
  }
  // switch (action.type) {
  //   case "ALLMOVIES":
  //     return {
  //       ListMovies: action.data,
  //     };
  //   default:
  //     return state;
  // }
};

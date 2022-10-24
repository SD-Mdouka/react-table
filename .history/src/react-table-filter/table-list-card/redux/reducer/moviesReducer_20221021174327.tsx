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
  const { type, data }: any = action;
  switch (type) {
    case "ALLMOVIES":
      return {
        ListMovies: data,
      };
    default:
      return state;
  }
};

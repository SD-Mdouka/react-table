import { ALLMOVIES } from "../types/movieType";

//type action
interface typeAction {
  type: string;
  data: [];
}
//initel value
const initialState: any = {
  ListMovies: [],
};
//3 - import reducer
export const moviesReducer = (
  state = initialState,
  { type, data }: typeAction
) => {
  switch (type) {
    case ALLMOVIES:
      return {
        ListMovies: data,
      };
    default:
      return state;
  }
};

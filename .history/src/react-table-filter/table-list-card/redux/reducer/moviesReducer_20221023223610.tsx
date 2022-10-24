import { ALLMOVIES } from "../types/movieType";

//type action
interface typeAction {
  type: string;
  data: [];
  pages: number;
}
//initel value
const initialState: any = {
  ListMovies: [],
  pageCount: 0,
};
//3 - import reducer
export const moviesReducer = (
  state = initialState,
  { type, data, page }: typeAction
) => {
  switch (type) {
    case ALLMOVIES:
      return {
        ListMovies: data,
        pages: page,
      };
    default:
      return state;
  }
};

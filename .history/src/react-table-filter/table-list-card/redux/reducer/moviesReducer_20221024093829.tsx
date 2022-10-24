import { ALLMOVIES } from "../types/movieType";

//type action
interface typeAction {
  type: string;
  data: any;
  pages: any;
}
//initel value
const initialState: any = {
  ListMovies: [],
  pageCount: 0,
};
//3 - import reducer
export const moviesReducer = (
  state = initialState,
  { type, data, pages }: typeAction
) => {
  switch (type) {
    case ALLMOVIES:
      return {
        ListMovies: data,
        pages: pages,
      };
    default:
      return state;
  }
};

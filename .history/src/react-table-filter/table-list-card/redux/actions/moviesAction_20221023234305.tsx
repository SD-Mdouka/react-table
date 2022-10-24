import axios from "axios";
import { ALLMOVIES, MovieApi } from "../types/movieType";

export const getListAllMovies: any = () => {
  //hiy order function
  return async (dispatch: any) => {
    const res = await axios.get(MovieApi);
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

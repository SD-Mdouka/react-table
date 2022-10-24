import axios from "axios";
import { ALLMOVIES, MovieApi } from "../types/movieType";

export const getListAllMovies: any = () => {
  // heiorder function
  return async (dispatch: any) => {
    const res = await axios.get(MovieApi);
    console.log(res.data.resulte);
    //state with funcion
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

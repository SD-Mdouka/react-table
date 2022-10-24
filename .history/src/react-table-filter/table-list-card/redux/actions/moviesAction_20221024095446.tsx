import axios from "axios";
import {
  ALLMOVIES,
  MovieApi,
  MovieSearchApi,
  PageNationApi,
} from "../types/movieType";

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

export const getListMoviesSearch: any = (word: string) => {
  // heiorder function
  return async (dispatch: any) => {
    const res = await axios.get(MovieSearchApi(word));
    //state with funcion
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const getPage: any = (numberPage: any) => {
  // heiorder function
  return async (dispatch: any) => {
    const res = await axios.get(PageNationApi(numberPage));
    // state with funcion
    dispatch({
      type: ALLMOVIES,
      data: res.data.total_pages,
      pages: res.data.total_pages,
    });
  };
};

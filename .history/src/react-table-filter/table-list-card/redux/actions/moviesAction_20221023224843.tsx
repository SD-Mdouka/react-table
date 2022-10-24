import axios from "axios";
import { ALLMOVIES, MovieApi } from "../types/movieType";

export const getListAllMovies: any = async () => {
  const res = await axios.get(MovieApi);
  return {
    type: ALLMOVIES,
    data: res.data.results,
    pages: 0,
  };
};

import axios from "axios";
import { ALLMOVIES, MovieApi } from "../types/movieType";

export const getListAllMovies = async () => {
  const res = await axios.get(MovieApi);
  return {
    type: ALLMOVIES,
    data: [1, 2, 3],
    pages: 0,
  };
};

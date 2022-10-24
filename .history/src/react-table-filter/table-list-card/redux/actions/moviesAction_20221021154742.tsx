import { ALLMOVIES } from "../types/movieType";

export const getAllMovies = () => {
  return {
    type: ALLMOVIES,
    data: [],
  };
};

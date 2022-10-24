import { ALLMOVIES } from "../types/movieType";

export const getListAllMovies = () => {
  return {
    type: ALLMOVIES,
    data: [1, 2, 3],
    pages: 0,
  };
};

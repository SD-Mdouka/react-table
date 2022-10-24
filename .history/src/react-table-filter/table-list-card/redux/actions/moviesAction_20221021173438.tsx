import { ALLMOVIES } from "../types/movieType";

export const getListAllMovies = () => {
  return {
    type: "ALLMOVIES",
    data: [],
  };
};

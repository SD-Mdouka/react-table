import { ALLMOVIES } from "../types/movieType";

export const getListAllMovies: any = () => {
  return {
    type: "ALLMOVIES",
    data: [],
  };
};

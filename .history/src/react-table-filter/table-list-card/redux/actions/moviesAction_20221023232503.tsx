import axios from "axios";
import { ALLMOVIES, MovieApi } from "../types/movieType";

export const getListAllMovies: any = () => {
  const res = axios.get(MovieApi);
  console.log("====================================");
  console.log(res.data);
  console.log("====================================");
  return {
    type: ALLMOVIES,
    data: res.data.results,
    pages: res.data.total_pages,
  };
};

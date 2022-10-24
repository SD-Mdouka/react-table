export const ALLMOVIES = "AllMovies";
export const MovieApi =
  "https://api.themoviedb.org/3/movie/popular?api_key=497503c38549d10e74795b4ebe84b909&language=en-US&page=1";
export const MovieSearchApi = (word: string) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=497503c38549d10e74795b4ebe84b909&query=${word}`;
};
export const PageNationApi = (numberPage: string) => {
  return `https://api.themoviedb.org/3/movie/popular?api_key=497503c38549d10e74795b4ebe84b909&language=en-US&page=${numberPage}`;
};

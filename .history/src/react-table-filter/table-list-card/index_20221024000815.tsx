import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import CardMoviesList from "./components/CardMoviesList";
import NavBar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviesDeatiles from "./components/MoviesDeatiles";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import { getListAllMovies } from "./redux/actions/moviesAction";

const TableCard = () => {
  //list movies
  const [movies, setMovies] = useState([]);
  const [countPages, setCountPages] = useState(0);

  //import store
  const dispatch = useDispatch();
  //In hooks is start all function
  useEffect(() => {
    //execute effect
    //dispatch
    dispatch(getListAllMovies());
  }, []);
  //store data
  const dataListMovies = useSelector((state: any) => state.ListMovies);
  //fetch your data
  useEffect(() => {
    setMovies(dataListMovies);
  }, [dataListMovies]);

  //get all movies filme
  // const getAllMovies = async () => {
  //   const res = await axios.get(
  //     "https://api.themoviedb.org/3/movie/popular?api_key=497503c38549d10e74795b4ebe84b909&language=en-US&page=1"
  //   );
  //   setMovies(res.data.results);
  //   setCountPages(res.data.total_pages);
  // };
  //to serach in api
  const SearchMovies = async (word: string) => {
    if (word === "") {
      //function git all movies
      // getAllMovies();
    } else {
      //function to search
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=497503c38549d10e74795b4ebe84b909&query=${word}`
      );
      setMovies(res.data.results);
      setCountPages(res.data.total_pages);
    }
  };
  //get current page movies filme
  const GetPage = async (numberPage: any) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=497503c38549d10e74795b4ebe84b909&language=en-US&page=${numberPage}`
    );
    setMovies(res.data.results);
    setCountPages(res.data.total_pages);
  };

  return (
    <div className="font color-body">
      <NavBar searchMovies={SearchMovies} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <CardMoviesList
                  // movies={[...movies]}
                  getPage={GetPage}
                  countPages={countPages}
                />
              }
            />
            <Route path="/movie/:id" element={<MoviesDeatiles />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
};

export default TableCard;

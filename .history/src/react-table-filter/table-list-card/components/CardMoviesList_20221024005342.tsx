import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getListAllMovies } from "../redux/actions/moviesAction";
import CardMovies from "./CardMovies";
import Pageination from "./Pageination";

const CardMoviesList = ({ getPage, countPages }: any) => {
  //list movies
  const [movies, setMovies] = useState([]);

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
  return (
    <Row className="mt-3">
      {[...movies].length >= 1 ? (
        [...movies].map((mov: any) => {
          return <CardMovies key={mov.id} mov={mov} />;
        })
      ) : (
        <h2>Aucuin Filme ...</h2>
      )}
      {[...movies].length >= 1 ? <Pageination /> : null}
    </Row>
  );
};

export default CardMoviesList;

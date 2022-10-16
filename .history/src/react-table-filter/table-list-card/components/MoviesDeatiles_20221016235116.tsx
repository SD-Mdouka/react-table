import axios from "axios";
import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const MoviesDeatiles = () => {
  const [movDetaile, setMoviesDetaile] = useState([]);
  const ID_MOVIS = useParams();
  //get movies filme detaile
  const getDetaileMovies = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${ID_MOVIS.id}?api_key=497503c38549d10e74795b4ebe84b909&language=en-US`
    );
    setMoviesDetaile(res.data);
    console.log(ID_MOVIS.id);
  };
  //in with load your page
  useEffect(() => {
    getDetaileMovies();
  }, []);
  const {
    poster_path,
    overview,
    homepage,
    vote_average,
    vote_count,
    release_date,
    title,
  }: any = { movDetaile };
  return (
    <div>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-4 ">
          <div className="card-detalis  d-flex align-items-center ">
            <img
              className="img-movie w-30"
              src={`https://image.tmdb.org/t/p/w500/` + poster_path}
              alt="ascad"
            />
            <div className="justify-content-center text-center  mx-auto">
              <p className="card-text-details border-bottom">
                {/* اسم الفيلم:  */}Name Filme:{title}
              </p>
              <p className="card-text-details border-bottom">
                {/* تاريخ الفيلم : */}Date Filme:{release_date}
              </p>
              <p className="card-text-details border-bottom">
                {/* عدد المقيمين  */}Number Rance: {vote_count}
              </p>
              <p className="card-text-details border-bottom">
                {/* التقييم  */}Rancing:{vote_average}
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1 ">
          <div className="card-story  d-flex flex-column align-items-start">
            <div className="text-end p-4 ">
              <p className="card-text-title border-bottom">History:</p>
            </div>
            <div className="text-end px-2">
              <p className="card-text-story">{overview}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col
          md="10"
          xs="12"
          sm="12"
          className="mt-2 d-flex justify-content-center "
        >
          <Link
            to="/"
            style={{ backgroundColor: "#b45b35", border: "none" }}
            className="btn btn-primary mx-2"
          >
            Routeur Home
          </Link>
          <a
            href={homepage}
            style={{ backgroundColor: "#b45b35", border: "none" }}
            className="btn btn-primary"
          >
            Vue Filme
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default MoviesDeatiles;

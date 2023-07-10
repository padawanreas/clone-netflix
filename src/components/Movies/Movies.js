import React, { useState, useEffect } from "react";
import { API_KEY } from "../Configs/ApiConfigs";
import { BASE_URL } from "../Configs/ApiConfigs";
import { Link } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";

import "./MovieStyle.css";
import MovieList from "./MovieList";

function Movies() {
  const [movies, setMovies] = useState([]);

  const discoverMovieUrl = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=fr-FR`;
  useEffect(() => {
    fetch(discoverMovieUrl)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data.results);

        setMovies(
          data.results[Math.floor(Math.random() * data.results.length - 1)]
        );
      });
  }, [discoverMovieUrl]);

  const bannerStyle = {
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "80vh",
  };

  function truncateDate(string, n) {
    return string?.length > n && string.substr(0, n - 1);
  }
  function truncateText(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <>
      <div className="banner__movie" style={bannerStyle}>
        <div className="banner__movie__content">
          <div className="banner__movie__info">
            <div className="banner__title">
              <h1>
                {movies.title || movies.name || movies.original_title} (
                {truncateDate(movies.release_date || movies.first_air_date, 5)})
              </h1>
            </div>

            <p className="banner__desc">
              {" "}
              <p>{truncateText(movies.overview, 100)}</p>
            </p>
            <div className="banner__btns">
              <button className="btn__more">
                <Link
                  to={`/detail/${movies.media_type}/${movies.id}`}
                  className="more"
                >
                  <BsInfoCircle style={{ marginRight: "5px" }} /> Plus d'info
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <MovieList />
    </>
  );
}

export default Movies;

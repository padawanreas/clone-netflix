import React, { useState, useEffect } from "react";
import ApiConfigs from "../Configs/ApiConfigs";
import { Outlet, useParams } from "react-router-dom";
import "./DetailStyle.css";
import Actors from "../Actors/Actors";

function Detail(props) {
  const params = useParams();
  const { type, id } = params;
  const [media, setMedia] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch(ApiConfigs.detail(type, id))
      .then((res) => res.json())
      .then((data) => {
        setGenres(data.genres);

        setMedia(data);
      });
  }, [params]);
  console.log(media.release_date);
  const frenchDate = new Date("");
  //console.log(genres);
  console.log(media);

  function truncateDate(string, n) {
    return string?.length > n && string.substr(0, n - 1);
  }

  return (
    <div className="detail">
      <img
        key={id}
        className="detail__bg"
        src={`https://image.tmdb.org/t/p/original/${media.backdrop_path}`}
        alt={media.title || media.name || media.original_title}
      />
      <div className="detail__content">
        <div className="detail__content__description">
          <div className="detail__img">
            <img
              className="detail__poster"
              src={`https://image.tmdb.org/t/p/original/${media.poster_path}`}
              alt={media.title || media.name || media.original_title}
            />
          </div>
          <div className="detail__description">
            <h1>
              {media.title || media.name || media.original_title} (
              {truncateDate(media.release_date || media.first_air_date, 5)})
            </h1>

            <div className="detail__genres">
              {genres.map((genre, id) => (
                <button key={id} className="genres">
                  {genre.name}
                </button>
              ))}
            </div>
            <div className="detail__text">
              <p>{media.overview}</p>
            </div>
            <div className="cast">
              <h1>Casts:</h1>
              <Actors />
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Detail;

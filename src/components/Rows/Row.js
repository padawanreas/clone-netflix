import React, { useState, useEffect } from "react";
import "./RowStyle.css";
import { Link } from "react-router-dom";

function Row(props) {
  const { url, title, type } = props;
  const [medias, setMedias] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMedias(data.results);
      });
  }, [url]);
  console.log(medias);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__images">
        {medias.map((media) => (
          <div key={media.id}>
            <Link to={`/detail/${type}/${media.id}`}>
              {
                <img
                  src={`https://image.tmdb.org/t/p/original/${media.backdrop_path}`}
                  className="row__image"
                  alt={media.title || media.name || media.original_title}
                />
              }
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;

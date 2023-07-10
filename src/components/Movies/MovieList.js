import React from "react";
import ApiConfigs from "../Configs/ApiConfigs";
import Row from "../Rows/Row";

function MovieList() {
  const types = ["movie"];
  const styles = ["trending", "top_rated", "popular"];
  const movies = {
    trending: "Trending Movies",
    top_rated: "Top Rated Movie",
    popular: "Popular Movies",
  };

  return (
    <div className="content__list">
      <Row
        url={ApiConfigs.trending(types[0], 1)}
        title={movies.trending}
        type={types[0]}
      />
      <Row
        url={ApiConfigs.topRated(types[0])}
        title={movies.top_rated}
        type={types[0]}
        style={styles[1]}
      />
      <Row
        url={ApiConfigs.popular(types[0])}
        title={movies.popular}
        type={types[0]}
        style={styles[1]}
      />
    </div>
  );
}

export default MovieList;

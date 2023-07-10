import React from "react";
import ApiConfigs from "../Configs/ApiConfigs";
import Row from "../Rows/Row";

function SerieList() {
  const types = ["tv"];
  const styles = ["trending", "top_rated", "popular"];

  const tv = {
    trending: "Trending TV Shows",
    top_rated: "Top Rated TV Shows",
    popular: "Popular TV Shows",
  };

  return (
    <div className="content__list">
      <Row
        url={ApiConfigs.trending(types[0], 1)}
        title={tv.trending}
        type={types[0]}
      />
      <Row
        url={ApiConfigs.topRated(types[0])}
        title={tv.top_rated}
        type={types[0]}
        style={styles[1]}
      />
      <Row
        url={ApiConfigs.popular(types[0])}
        title={tv.popular}
        type={types[0]}
        style={styles[1]}
      />
    </div>
  );
}

export default SerieList;

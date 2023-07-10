import React, { useState, useEffect } from "react";
import { API_KEY } from "../Configs/ApiConfigs";
import { BASE_URL } from "../Configs/ApiConfigs";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slide.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { BsInfoCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

function Slide() {
  const [medias, setMedias] = useState([]);
  const trendingURL = `${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=fr-FR`;

  useEffect(() => {
    fetch(trendingURL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMedias(data.results);
      });
  }, [trendingURL]);
  console.log(medias);

  function truncateText(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <>
      <div className="banner">
        <Swiper
          centeredSlides={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {medias.map((media) => (
            <SwiperSlide key={media.id}>
              <div className="banner__content">
                <img
                  key={media.id}
                  src={`https://image.tmdb.org/t/p/original/${media.backdrop_path}`}
                  alt={media.title || media.original_title || media.name}
                  className="banner__images"
                />
              </div>
              <div className="banner__text__content">
                <div className="banner__text">
                  <h1>{media.title || media.original_title || media.name}</h1>
                  <p>{truncateText(media.overview, 100)}</p>
                  <div className="banner__btns">
                    <button className="btn__more">
                      <Link
                        to={`/detail/${media.media_type}/${media.id}`}
                        className="more"
                      >
                        <BsInfoCircle style={{ marginRight: "5px" }} /> Plus
                        d'info
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Slide;

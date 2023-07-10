import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ApiConfigs from "../Configs/ApiConfigs";
import "./ActorStyle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

function Actors(props) {
  const param = useParams();
  const { type, id } = param;
  const [actors, setActors] = useState([]);

  const newActor = actors.filter(function (ac) {
    if (ac.profile_path !== null) return ac.known_for_department === "Acting";
  });
  //console.log(newActor);

  useEffect(() => {
    fetch(ApiConfigs.casts(type, id))
      .then((res) => res.json())
      .then((data) => setActors(data.cast));
  }, [param]);
  //console.log(actors);
  return (
    <div className="casts">
      <Swiper
        centeredSlides={true}
        slidesPerView={5}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {newActor.map((actor) => (
          <SwiperSlide key={actor.id}>
            <div className="card__actor">
              <img
                src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
                className="actor__img"
              />
              <div className="actor__info">
                <h3>{actor.name}</h3>
                <p>{actor.character}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Actors;

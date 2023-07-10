import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Movies from "../Movies/Movies";
import Series from "../Series/Series";
import Detail from "../Detail/Detail";

function RouteConfig() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />

        <Route path="/tv" element={<Series />} />
        <Route path="/detail/:type/:id" element={<Detail />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default RouteConfig;

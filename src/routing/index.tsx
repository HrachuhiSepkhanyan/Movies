import React, { FC } from "react";
import AboutFilm from "../pages/filmPage/AboutFilm";
import { Route, Routes } from "react-router-dom";
import Main from "../components/main/moviesContainer";

const Routing: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/:page" element={<Main />} />
      <Route path="/movies/:title" element={<AboutFilm />} />
    </Routes>
  );
};
export default Routing;

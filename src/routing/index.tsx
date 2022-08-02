import React, { FC } from "react";

import AboutFilm from "../pages/filmPage/AboutFilm";
import { Route, Routes } from "react-router-dom";

export const MAIN_PATH = "/:page";
export const MOVIE_PATH = "/movies/post/:title";
interface IFilterValue {
  filterValue: string;
}
const Routing: FC<IFilterValue> = ({ filterValue }) => {
  return (
    <Routes>
      <Route path="/movies/post/:title" element={<AboutFilm />} />
    </Routes>
  );
};
export default Routing;

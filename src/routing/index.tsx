import React, { FC } from "react";
import AboutFilm from "../pages/filmPage/AboutFilm";
import { Route, Routes } from "react-router-dom";
import Main from "../components/main/moviesContainer";
export const MAIN_PATH = "/:page";
export const MOVIE_PATH = "/movies/post/:title";
interface IFilterValue {
  filterValue: string;
  setFilterValue: (inputValue: string) => void;
}
const Routing: FC<IFilterValue> = ({ filterValue, setFilterValue }) => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route
        path="/:page"
        element={
          <Main filterValue={filterValue} setFilterValue={setFilterValue} />
        }
      />
      <Route path="/movies/post/:title" element={<AboutFilm />} />
    </Routes>
  );
};
export default Routing;

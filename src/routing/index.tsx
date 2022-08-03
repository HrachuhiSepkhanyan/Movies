import React, { FC } from "react";
import AboutFilm from "../pages/filmPage/AboutFilm";
import { Route, Routes } from "react-router-dom";
import Main from "../components/main/moviesContainer";
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
      <Route path="/movies/:title" element={<AboutFilm />} />
    </Routes>
  );
};
export default Routing;

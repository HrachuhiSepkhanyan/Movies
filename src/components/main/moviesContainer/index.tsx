import { Button, Pagination } from "@mui/material";
import { observer } from "mobx-react";
import { FC, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { moviesStore } from "../../../MobxStore/movies";
import Loader from "../../loading/loading";
import { SearchForm } from "../searchForm/Form.styled";
import { Style } from "../moviesContainer/style";
interface IFilm {
  Title: string;
  Year: string;
  Poster: string;
}
const Main: FC = () => {
  const [searchValue, setSearchValue] = useState("Batman");
  const navigate = useNavigate();
  const params = useParams();
  const page = params.page ? +params.page : 1;

  useEffect(() => {
    moviesStore.getMovies(page, searchValue);
  }, [page, searchValue]);

  // useEffect(() => {
  //   moviesStore.getMoviesBySearch(searchValue);
  // }, [searchValue]);

  useEffect(() => {
    moviesStore.showSearchForm = true;
  }, []);

  const onPageChange = (event: any, value: number) => {
    navigate(`/${value}`);
  };
  const handleSearchInputChanges = (e: any) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e: any) => {
    e.preventDefault();
    resetInputField();
  };
  return moviesStore.loading ? (
    <Loader />
  ) : (
    <div>
      <SearchForm>
        <h3>Search for a movie</h3>
        <input onChange={handleSearchInputChanges} value={searchValue} />
        <input onClick={callSearchFunction} type="submit" value="Search" />
      </SearchForm>
      <div>
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          page={page}
          onChange={onPageChange}
        />
      </div>
      <Style.Container>
        {moviesStore.movies
          .filter((movie: IFilm) =>
            movie.Title.includes(searchValue ? searchValue : "")
          )
          .map((movie: IFilm) => {
            return (
              <NavLink
                key={Math.random()}
                style={{ textDecoration: "none", color: "inherit" }}
                to={`/movies/${movie.Title}`}
              >
                <Style.FilmItem key={Math.random()}>
                  <div onClick={() => {}}>
                    <div>
                      <Button>{movie.Title}</Button>
                    </div>
                  </div>
                  <img src={movie.Poster} alt="" />
                  <div>{movie.Year}</div>
                </Style.FilmItem>
              </NavLink>
            );
          })}
      </Style.Container>
    </div>
  );
};

export default observer(Main);

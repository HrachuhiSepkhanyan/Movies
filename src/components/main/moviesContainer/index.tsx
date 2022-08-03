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
const Main: FC<any> = ({ filterValue }) => {
  const [inputVal, setInputVal] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const page = params.page ? +params.page : 1;

  useEffect(() => {
    moviesStore.getMovies(page);
  }, [page]);

  useEffect(() => {
    moviesStore.showSearchForm = true;
  }, []);

  const onPageChange = (event: any, value: number) => {
    navigate(`/${value}`);
  };

  return moviesStore.loading ? (
    <Loader />
  ) : (
    <div>
      <SearchForm>
        <h3>Search for a movie</h3>
        <input
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
          value={inputVal}
        />
        <button>Search</button>
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
            movie.Title.includes(filterValue ? filterValue : "")
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

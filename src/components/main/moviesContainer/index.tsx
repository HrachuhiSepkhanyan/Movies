import { Button, Pagination } from "@mui/material";
import { observer } from "mobx-react";
import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { moviesStore } from "../../../MobxStore/movies";
import Loader from "../../loading/loading";
import { Style } from "../searchForm/Form.styled";
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
  console.log(page);

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
      <Style.SearchForm>
        <h3>Search for a movie</h3>
        <input
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
          value={inputVal}
        />
        <button>Search</button>
      </Style.SearchForm>
      <div>
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          page={page}
          onChange={onPageChange}
        />
      </div>
      <div>
        {moviesStore.movies
          .filter((movie: IFilm) =>
            movie.Title.includes(filterValue ? filterValue : "")
          )
          .map((movie: IFilm) => {
            return (
              <div key={Math.random()}>
                <div onClick={() => {}}>
                  <div>
                    <Button>{movie.Title}</Button>
                  </div>
                </div>
                <img src={movie.Poster} alt="" />
                <div>{movie.Year}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default observer(Main);

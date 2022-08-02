import { Button, Pagination, Tooltip } from "@mui/material";
import { observer } from "mobx-react";
import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { moviesStore } from "../../../MobxStore/movies";
import Loader from "../../loading/loading";

interface IMovieItem {
  Title: string;
  Year: string;
  Poster: string;
}
const Main: FC<any> = ({ filterValue }) => {
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

  const handleClick = (movie: IMovieItem) => {
    window.open(`/movies/post/${movie.Title}`);
  };

  return moviesStore.loading ? (
    <Loader />
  ) : (
    <div>
      <div>
        {moviesStore.movies
          .filter((movie: IMovieItem) =>
            movie.Title.includes(filterValue ? filterValue : "")
          )
          .map((movie: any) => {
            return (
              <div key={Math.random()}>
                <div onClick={() => handleClick(movie)}>
                  <Tooltip title={movie.Title} arrow>
                    <Button>
                      {movie.Title.length > 30
                        ? movie.Title.substring(0, 30) + "..."
                        : movie.Title}
                    </Button>
                  </Tooltip>
                </div>
                <img src={movie.Poster} alt="" />
                <div>{movie.Year}</div>
              </div>
            );
          })}
      </div>
      <div>
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          page={page}
          onChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default observer(Main);

import { observer } from "mobx-react";
import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { movieStore } from "../../MobxStore/movie";
import { Style } from "./About.style";
import Loader from "../../components/loading/loading";

interface IMovieItem {
  Title: string;
  Year: string;
  Poster: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Writer: string;
  Actors: string;
  Language: string;
  Country: string;
  Awards: string;
}
const AboutFilm: FC<IMovieItem> = () => {
  const params = useParams();
  const title: any = params.title;

  useEffect(() => {
    movieStore.getMovie(title);
  }, [title]);

  return movieStore.loading ? (
    <Loader />
  ) : (
    <Style.Container>
      <div>
        <h1> {title}</h1>
        <img src={movieStore.movie?.Poster} alt="" />
      </div>
      <Style.Description>
        <Style.Item>{movieStore?.movie?.Year}</Style.Item>
        <Style.Item>{movieStore?.movie?.Released}</Style.Item>
        <Style.Item>{movieStore.movie?.Genre}</Style.Item>
        <Style.Item>{movieStore.movie?.Writer}</Style.Item>
        <Style.Item>{movieStore.movie?.Actors}</Style.Item>
        <Style.Item>{movieStore.movie?.Plot}</Style.Item>
        <Style.Item>{movieStore.movie?.Language}</Style.Item>
        <Style.Item>{movieStore.movie?.Country}</Style.Item>
        <Style.Item>{movieStore.movie?.Awards}</Style.Item>
      </Style.Description>
    </Style.Container>
  );
};

export default observer(AboutFilm);

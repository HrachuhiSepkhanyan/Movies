import { FilmApi } from "./../API/API";
import { makeAutoObservable } from "mobx";
import { configure } from "mobx";
configure({
  useProxies: "never",
});

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

class MovieStore {
  movie: IMovieItem | [] | undefined | string = [];
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getMovie = async (title: string) => {
    const result = await FilmApi.getFilmByName(title);
    this.movie = result.data;
  };
}
export const movieStore = new MovieStore();

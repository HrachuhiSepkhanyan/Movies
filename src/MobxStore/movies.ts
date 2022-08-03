import { makeAutoObservable } from "mobx";
import { configure } from "mobx";
import { FilmApi } from "../API/API";

configure({
  useProxies: "never",
});

interface IMovieItem {
  Title: string;
  Year: string;
  Poster: string;
}

class MoviesStore {
  movies: IMovieItem[] = [];
  showSearchForm = false;
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getMovies(page: number = 1) {
    const result = FilmApi.getFilmByPage(page);
    console.log(result);
  }
}
export const moviesStore = new MoviesStore();

import { makeAutoObservable } from "mobx";
import { configure } from "mobx";

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

  getMovies(page: number = 1) {}
}
export const moviesStore = new MoviesStore();

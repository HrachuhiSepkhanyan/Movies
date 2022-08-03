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

  getMovies = async (page: number = 1) => {
    const result = await FilmApi.getFilmByPage(page);
    this.movies = result.data.Search;
  };
}
export const moviesStore = new MoviesStore();

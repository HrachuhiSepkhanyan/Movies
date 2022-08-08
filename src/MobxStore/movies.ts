import { makeAutoObservable } from "mobx";
import { configure } from "mobx";
import { FilmApi } from "../API/API";

configure({
  useProxies: "never",
});

interface IFilm {
  Title: string;
  Year: string;
  Poster: string;
}

class MoviesStore {
  movies: IFilm[] = [];
  showSearchForm = false;
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getMovies = async (page: number = 1, title: string) => {
    const result = await FilmApi.getFilmByPage(page, title);
    this.movies = result.data.Search;
  };
  getMoviesBySearch = async (title: string) => {
    const result = await FilmApi.getFilmByName(title);
    this.movies = result.data.Search;
  };
}
export const moviesStore = new MoviesStore();

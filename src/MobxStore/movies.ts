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
  Movies: IMovieItem[];
}

class MoviesStore {
  movies: IMovieItem[] = [];
  showSearchForm = false;
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getMovies(page: number = 1) {
    this.loading = true;
    const result: any = FilmApi.getFilmByPage(page);
    result.then((response: any) => {
      JSON.stringify(response);
    });
    console.log(result);
    console.log(
      JSON.parse(JSON.stringify(this.movies)),
      "aaaaaaaaaaaaaaaaaaaaaaa"
    );
    this.movies = result;
    this.loading = false;
    this.showSearchForm = true;
  }
}

export const moviesStore = new MoviesStore();

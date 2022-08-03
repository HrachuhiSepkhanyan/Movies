import { makeAutoObservable } from "mobx";
import { configure } from "mobx";

configure({
  useProxies: "never",
});

interface IMovie {
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
  movie: IMovie | null | string = null;
  loading = false;
  showSearchField = false;

  constructor() {
    makeAutoObservable(this);
  }

  getMovie(title: string) {}
}
export const movieStore = new MovieStore();

import axios from "axios";

const API_URL = `http://www.omdbapi.com/?`;
const API_KEY = `53ab40d7`;

const api = axios.create({
  baseURL: API_URL,
});

export const FilmApi = {
  getFilmByName(title: string) {
    return api.get(`apikey=${API_KEY}&t=${title}`);
  },
  getFilmByPage(page: number) {
    return api
      .get(`apikey=53ab40d7&s=Batman&page=1&t=series`)
      .then((response) => JSON.stringify(response))
      .then((result) => {
        return result;
      });
  },
};

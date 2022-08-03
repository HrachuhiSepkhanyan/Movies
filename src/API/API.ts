import axios from "axios";

const API_URL = `http://www.omdbapi.com/?`;
const API_KEY = `53ab40d7`;

const api = axios.create({
  baseURL: API_URL,
});

export const FilmApi = {
  getFilmByName(title: string) {
    return api
      .get(`apikey=${API_KEY}&t=${title}`)
      .then((response) => JSON.stringify(response))
      .then((result) => console.log(result));
  },
  getFilmByPage(page: number) {
    return axios.get(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=Batman&page=${page}&t=series`
    );
  },
};

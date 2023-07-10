export const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
export const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
  trending: (type) => `${BASE_URL}/trending/${type}/day?api_key=${API_KEY}`,
  topRated: (type) => `${BASE_URL}/${type}/top_rated?api_key=${API_KEY}`,
  popular: (type) => `${BASE_URL}/${type}/popular?api_key=${API_KEY}&page=3`,
  documentariesMovies: (type) =>
    `${BASE_URL}/discover/${type}?api_key=${API_KEY}`,
  detail: (type, id) =>
    `${BASE_URL}/${type}/${id}?api_key=${API_KEY}&language=fr-FR`,
  casts: (type, idMovie) =>
    `${BASE_URL}/${type}/${idMovie}/credits?api_key=${API_KEY}`,
};

export default requests;

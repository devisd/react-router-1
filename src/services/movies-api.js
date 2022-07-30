import axios from 'axios';

// const BASE_URL = 'https://api.themoviedb.org/3';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = '60778458bdbdfa7e14ca7e73fe4a1fef';

// // список самых популярных фильмов на сегодня для создания коллекции на главной странице.
export async function fetchOnTrending() {
  const response = await axios.get(`/trending/movie/week?api_key=${KEY}`);
  return response.data.results;
}

// async function fetchMovies(url = '', config = {}) {
//   const response = await fetch(url, config);

//   return response.ok
//     ? await response.json()
//     : Promise.reject(new Error('Not found'));
// }

// // список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// export function fetchOnTrending() {
//   return fetchMovies(`${BASE_URL}/trending/movie/week?api_key=${KEY}`).then(
//     response => response.results
//   );
// }

// поиск кинофильма по ключевому слову на странице фильмов.
export async function fetchOnSearchMovies(searchQuery) {
  const response = await axios.get(
    `/search/movie?api_key=${KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
  );
  return response.data.results;
}

// поиск кинофильма по ключевому слову на странице фильмов.
// export function fetchOnSearchMovies(searchQuery) {
//   return fetchMovies(
//     `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
//   ).then(response => response.results);
// }

// запрос полной информации о фильме для страницы кинофильма.
export async function fetchOnMovieDetails(movieId) {
  const response = await axios.get(
    `/movie/${movieId}?api_key=${KEY}&language=en-US`
  );
  return response.data;
}

// запрос полной информации о фильме для страницы кинофильма.
// export function fetchOnMovieDetails(movieId) {
//   return fetchMovies(
//     `${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US`
//   );
// }

// запрос информации о актёрском составе для страницы кинофильма.
export async function fetchOnMovieCast(movieId) {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
  return response.data.cast;
}
// запрос информации о актёрском составе для страницы кинофильма.
// export function fetchOnMovieCredits(movieId) {
//   return fetchMovies(
//     `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
//   ).then(response => response.cast);
// }

// запрос обзоров для страницы кинофильма.
export async function fetchOnMovieReviews(movieId) {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  return response.data.results;
}
// запрос обзоров для страницы кинофильма.
// export function fetchOnMovieReviews(movieId) {
//   return fetchMovies(
//     `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
//   ).then(response => response.results);
// }

/// BONUS !!
// запрос информации о съемочной группе для страницы кинофильма.
export async function fetchOnMovieCrews(movieId) {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
  return response.data.crew;
}
// запрос информации о съемочной группе для страницы кинофильма.
// export function fetchOnMovieCrews(movieId) {
//   return fetchMovies(
//     `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
//   ).then(response => response.crew);
// }

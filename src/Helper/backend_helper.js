import * as url from "./urlHelper";
import { get } from "./apiHelper";

const Api_key = "api_key=1c00b53723982daca17d66f3b4630986";

export const posterdata = () => {
  const Url = `${url.POSTER_DATA}?${Api_key}`;
  return get(Url);
};

export const topMovie = () => {
  const Url = `${url.TOP_RATED}?${Api_key}`;
  return get(Url);
};
export const nowPlaying = () => {
  const Url = `${url.NOW_PLAYING}?${Api_key}`;
  return get(Url);
};

export const tvPopular = () => {
  const Url = `${url.TV_POPULAR}?${Api_key}`;
  return get(Url);
};
export const tvrated = () => {
  const Url = `${url.TV_RATED}?${Api_key}`;
  return get(Url);
};
export const genre_movies = () => {
  const Url = `${url.GENRE_MOVIE}?${Api_key}`;
  return get(Url);
};
export const genre_movies_all = () => {
  const Url = `${url.GENRE_MOVIE}?${Api_key}`;
  return get(Url);
};
export const single_movies = (id) => {
  const Url = `${url.SINGLE_MOVIE}/${id}?${Api_key}`;
  return get(Url);
};
export const movie_credit = (id) => {
  const Url = `${url.SINGLE_MOVIE}/${id}/${url.MOVIE_CREDIT}?${Api_key}`;
  return get(Url);
};
export const similiar_movie = (id) => {
  const Url = `${url.SINGLE_MOVIE}/${id}/${url.SIMILIAR_MOVIE}?${Api_key}`;
  return get(Url);
};
export const genres_find=(id)=>{
  const Url=`${url.GENRES_FIND}?${Api_key}&with_genres=${id}`;
  return get(Url);
}
export const search_movie=(value)=>{
  const Url=`${url.SEARCH_MOVIE}?${Api_key}&query=${value}`;
  return get(Url);
}
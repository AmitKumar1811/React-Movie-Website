import {
  genre_movies,
  genre_movies_all,
  genres_find,
  movie_credit,
  nowPlaying,
  posterdata,
  search_movie,
  similiar_movie,
  single_movies,
  topMovie,
  tvPopular,
  tvrated,
} from "../Helper/backend_helper";
import { getGenreMovie, getGenredata } from "../Store/GenreSlice";
import {
  getloading,
  getnowplaying,
  getposterdata,
  getposterloading,
  getsearchdata,
  getsearchloading,
  gettoprated,
  gettvpopular,
  gettvrated,
} from "../Store/HomeSlice";
import {
  getloadingdata,
  getmovieCredit,
  getmovieSimiliar,
  getmoviedata,
  movieId,
} from "../Store/MovieSlice";

export const fetchposterdata = () => {
  return async (dispatch) => {
    dispatch(getposterloading());
    try {
      const result = await posterdata();
      const { data, status } = result;
      if (status) {
        dispatch(getposterdata(data));
      } else {
        // error here
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchtoprated = () => {
  return async (dispatch) => {
    dispatch(getloading());
    try {
      const result = await topMovie();
      const { data, status } = result;
      if (status) {
        dispatch(gettoprated(data));
      } else {
        // error here
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchnowplaying = () => {
  return async (dispatch) => {
    dispatch(getloading());
    try {
      const result = await nowPlaying();
      const { data, status } = result;
      if (status) {
        dispatch(getnowplaying(data));
      } else {
        // error here
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchtvpopular = () => {
  return async (dispatch) => {
    dispatch(getloading());
    try {
      const result = await tvPopular();
      const { data, status } = result;
      if (status) {
        dispatch(gettvpopular(data));
      } else {
        // error here
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchtvrated = () => {
  return async (dispatch) => {
    dispatch(getloading());
    try {
      const result = await tvrated();
      const { data, status } = result;
      if (status) {
        dispatch(gettvrated(data));
      } else {
        // error here
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchGenre = () => {
  return async (dispatch) => {
    dispatch(getloading());
    try {
      const result = await genre_movies();
      const { data, status } = result;
      if (status) {
        dispatch(getGenredata(data));
      } else {
        // error here
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchGenreMovies = (id) => {
  return async (dispatch) => {
    dispatch(getloading());
    try {
      const result = await genres_find(id);
      const { data, status } = result;
      if (status) {
        dispatch(getGenreMovie(data));
      } else {
        // error here
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchMoviedata = (id) => {
  return async (dispatch) => {
    // dispatch(getloading());
    try {
      const result = await single_movies(id);
      const { data, status } = result;
      if (status) {
        dispatch(getmoviedata(data));
      } else {
        // error here
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchCredit = (id) => {
  console.log("Movies Id is", id);
  return async (dispatch) => {
    // dispatch(getloading());
    try {
      const result = await movie_credit(id);
      const { data, status } = result;
      if (status) {
        dispatch(getmovieCredit(data));
      } else {
        // error here
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchSimiliar = (id) => {
  return async (dispatch) => {
    dispatch(getloadingdata());
    try {
      const result = await similiar_movie(id);
      const { data, status } = result;
      if (status) {
        dispatch(getmovieSimiliar(data));
      } else {
        // error here
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchSearchdata = (searchvalue) => {
  return async (dispatch) => {
    dispatch(getsearchloading());
    if(searchvalue.length>=3)
    {
      try {
        const result = await search_movie(searchvalue);
        const { data, status } = result;
        if (status) {
          dispatch(getsearchdata(data));
        } else {
          // taoster--console error
        }
      } 
      catch (error) 
      {
        console.log(error);
      }
    }
  };
};

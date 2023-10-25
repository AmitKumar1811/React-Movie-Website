import React, { useEffect } from "react";
import "../assests/Css/Movie.css";
import { useDispatch, useSelector } from "react-redux";
import Poster from "./Poster";
import Movie1 from "./Movie1";
import { useNavigate } from "react-router-dom";
import {
  fetchnowplaying,
  fetchtoprated,
  fetchtvpopular,
  fetchtvrated,
} from "../utils/middleware";
const Movies = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const contents1 = useSelector((state) => state.HomeExplore.content1);
  const contents2 = useSelector((state) => state.HomeExplore.content2);
  const contents3 = useSelector((state) => state.HomeExplore.content3);
  const contents4 = useSelector((state) => state.HomeExplore.content4);

  useEffect(() => {
    dispatch(fetchnowplaying());
    dispatch(fetchtoprated());
    dispatch(fetchtvpopular());
    dispatch(fetchtvrated());
  }, []);

  const handleMovie = (value, data) => {
    navigate(`/movie_all/${value}`, { state: { data } });
  };

  return (
    <>
      <Poster />
      <div className="movie_box">
        <div className="Movies_list">
          <div className="Movies_details">
            <h6>
              TRENDING MOVIES
              <span className="Movies_details_icon">
                <i className="fa-solid fa-play"></i>
              </span>
            </h6>
            <h6
              className="More_movies"
              onClick={() => handleMovie("trending", contents1)}
            >
              View More<i className="fa-sharp fa-solid fa-forward"></i>
            </h6>
          </div>
          <div className="Movie_Main_box">
            <Movie1 Data={contents1} />
          </div>
        </div>

        <hr></hr>

        <div className="Movies_list">
          <div className="Movies_details">
            <h6>
              NOW PLAYING
              <span className="Movies_details_icon">
                <i className="fa-solid fa-play"></i>
              </span>
            </h6>
            <h6
              className="More_movies"
              onClick={() => handleMovie("now_playing", contents2)}
            >
              View More<i className="fa-sharp fa-solid fa-forward"></i>
            </h6>
          </div>
          <div className="Movie_Main_box">
            <Movie1 Data={contents2} />
          </div>
        </div>

        <hr></hr>
        <div className="Movies_list">
          <div className="Movies_details">
            <h6>
              TRENDING TVSERIES
              <span className="Movies_details_icon">
                <i className="fa-solid fa-play"></i>
              </span>
            </h6>
            <h6
              className="More_movies"
              onClick={() => handleMovie("trending_tv", contents3)}
            >
              View More <i className="fa-sharp fa-solid fa-forward"></i>
            </h6>
          </div>
          <div className="Movie_Main_box">
            <Movie1 Data={contents3} />
          </div>
        </div>
        <hr></hr>

        <div className="Movies_list">
          <div className="Movies_details">
            <h6>
              TRENDING TVSERIES
              <span className="Movies_details_icon">
                <i className="fa-solid fa-play"></i>
              </span>
            </h6>
            <h6
              className="More_movies"
              onClick={() => handleMovie("tv_top", contents4)}
            >
              View More<i className="fa-sharp fa-solid fa-forward"></i>
            </h6>
          </div>
          <div className="Movie_Main_box">
            <Movie1 Data={contents4} />
          </div>
        </div>
        <br></br>
      </div>
    </>
  );
};

export default Movies;

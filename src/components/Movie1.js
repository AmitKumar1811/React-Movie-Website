import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { movieId } from "../Store/MovieSlice";
import { useNavigate } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import "../assests/Css/Movie.css";
import Loader from "./Loader";

const Movie1 = ({ Data }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (Data.length !== 0) {
      setData(Data.results.slice(0, 5));
    }
  }, [Data]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const DisplayFirstTwoLines = (item) => {
    const lines = item.split(" ");
    const firstTwoLines = lines.slice(0, 15);
    firstTwoLines.push("...");
    const UpdatedLine = firstTwoLines.join(" ");
    return UpdatedLine;
  };

  const handleMovie = (value) => {
    dispatch(movieId(value));
    navigate(`/movie/${value}`);
  };

  return (
    <>
      {Data.length === 0 ? (
        <>
          <Loader />
          <Loader />
          <Loader />
          <Loader />
          <Loader />
        </>
      ) : data === null ? (
        <h6>No Data Found</h6>
      ) : (
        data.map((item, index) => {
          return (
            <figure className="snip1527" key={index}>
              <div className="image">
                <img
                  src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                  alt="yuu"
                />
              </div>
              <figcaption>
                <div className="date" onClick={() =>handleMovie(item.id)}>
                  <i
                    className="fa-sharp fa-solid fa-play fa-xl"
                    style={{ color: "#7D146D" }}
                  ></i>
                </div>
                <h5>{item.original_title}</h5>
                <p>{DisplayFirstTwoLines(item.overview)}</p>
              </figcaption>
            </figure>
          );
        })
      )}
    </>
  );
};

export default Movie1;

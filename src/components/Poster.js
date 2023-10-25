import React, { useEffect } from "react";
import "../assests/Css/Navbar.css";
import "../assests/Css/poster.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { movieId } from "../Store/MovieSlice";
import { fetchposterdata } from "../utils/middleware";
import loaderimage from "../assests/image/money.jpg";
const Poster = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.HomeExplore.posterloading);
  const data = useSelector((state) => state.HomeExplore.postercontent.results);
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
  const carouselSettings = {
    autoPlay: true,
    autoPlayInterval: 1000,
    infinite: true,
    items: 1,
    mouseTracking: true,
    disableButtonsControls: true,
    disableDotsControls: true,
  };
  useEffect(() => {
    dispatch(fetchposterdata());
  }, []);

  return (
    <AliceCarousel {...carouselSettings}>
      {loading ? (
        <img
          src={loaderimage}
          style={{ width: "100%", height: "650px" }}
          alt="Slide"
        />
      ) : (
        data.map((item, index) => (
          <div className="carousel-item12" key={index}>
            <img
              src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${item.backdrop_path}`}
              alt="Slide"
            />
            <div className="carousel-caption">
              <h1>{item.original_title || item.original_name}</h1>
              <h4>{item.media_type.toUpperCase()}</h4>
              <p>{DisplayFirstTwoLines(item.overview)}</p>
              <button
                className="poster_button"
                onClick={() => handleMovie(item.id)}
              >
                LEARN MORE
              </button>
            </div>
          </div>
        ))
      )}
    </AliceCarousel>
  );
};

export default Poster;

import React, { useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useDispatch, useSelector } from "react-redux";
import "../assests/Css/SingeMovie.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { movieId } from "../Store/MovieSlice";
import ModalVideo from "./ModalVideo";
import {
  fetchCredit,
  fetchSimiliar,
  fetchMoviedata,
} from "../utils/middleware";
import Loader from "./Loader";
const SingleMovie = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const data = useSelector((state) => state.Movie.moviedata);
  const similiar = useSelector((state) => state.Movie.similiar);
  const credit = useSelector((state) => state.Movie.credit);
  const isloading = useSelector((state) => state.Movie.isloading);

  const handleMovie = (value) => {
    dispatch(movieId(value));
    navigate(`/movie/${value}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const responsive = {
    0: { items: 4 },
    568: { items: 6 },
    1024: { items: 8 },
  };

  const DisplayFirstTwoLines = (item) => {
    const lines = item.split(" ");
    const firstTwoLines = lines.slice(0, 15);
    firstTwoLines.push("...");
    const UpdatedLine = firstTwoLines.join(" ");
    return UpdatedLine;
  };

  useEffect(() => {
    dispatch(fetchMoviedata(id));
    dispatch(fetchSimiliar(id));
    dispatch(fetchCredit(id));
  }, [id]);

 console.log("data is",data);

  return (
    <>
      <div className="movies_singlepage">
        <div
          className="movies_modal"
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${data.backdrop_path}')`,
          }}
        />

        <div className="movie_singlebox">
          <div className="movie_poster">
            <img
              class="poster__img"
              src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
              alt=""
            />
          </div>
          <div className="open__detailsPage">
            <h3>{data.original_title}</h3>
            <div className="year">
            {new Date(data.release_date).getFullYear()}<b className="title_me">Movie</b><br></br>
              <b className="vote_back">
                <b className="tmdb">TMDB</b>
                <b className="vote_ave">⭐{data.vote_average}</b>
              </b>
            </div>
            <h5 className="genreList">
              {data.genres?.map((item, index) => {
                return (
                  <p key={index} className="mygenre">
                    {item.name}
                  </p>
                );
              })}
            </h5>
            <div className="videopage">
              <div className="wrapper">
                <div className="image play_trailer" data-title="Arrival">
                  <div>
                    <ModalVideo id={data.id} />
                  </div>
                </div>
              </div>
            </div>
            <div className="tagline">
              <h5>{data.tagline}</h5>
            </div>
            <div className="overview">
              <p>{data.overview}</p>
            </div>
            <div className="other_lists">
              <ul>
                <li>
                  DURATION: <span>{data.runtime}mins</span>
                </li>
                <li>
                  STUDIO:
                  {data.production_companies?.map((item, index) => {
                    return (
                      <>
                        <span key={index}>{item.name},</span>
                      </>
                    );
                  })}
                </li>
                <li>
                  RELEASE DATE: <span>{data.release_date}</span>
                </li>
                <li>
                  STATUS: <span>{data.status}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="movie_details">
        <h4>Cast</h4>
        <AliceCarousel
          autoPlay
          autoPlayStrategy="none"
          autoPlayInterval={1000}
          animationDuration={1000}
          animationType="fadeout"
          responsive={responsive}
          touchTracking={false}
          infinite
          disableDotsControls
          disableButtonsControls
        >
          {credit.cast?.map((item, index) => (
            <div className="cast_item" data-value={index} key={index}>
              <div className="circular-image">
                {item.profile_path !== null ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${item.profile_path}`}
                    alt="nofyf"
                  />
                ) : (
                  <img
                    src="https://www.pngitem.com/pimgs/m/42-424302_ic-ne-administrator-male-customer-image-black-and.png"
                    alt="nofyf"
                  />
                )}
              </div>
              <p className="cast_name">{item.character}</p>
              <p className="cast_original_name">{item.original_name}</p>
            </div>
          ))}
        </AliceCarousel>
        <div className="similiar_movie">
          <h4>You May Also Like</h4>
          <div className="Movie_Main_box">
            {isloading ? (
              <>
                <Loader />
                <Loader />
                <Loader />
                <Loader />
                <Loader />
              </>
            ) : (
              similiar.results.slice(0, 5)?.map((item, index) => {
                return (
                  <figure class="snip1527" key={index}>
                    <div class="image">
                      <img
                        src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                        alt="yuu"
                      />
                    </div>
                    <figcaption>
                      <div class="date" onClick={() => handleMovie(item.id)}>
                        <i
                          class="fa-sharp fa-solid fa-play fa-xl"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleMovie;

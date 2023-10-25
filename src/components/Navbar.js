import React, { useEffect, useState ,useRef} from "react";
import "../assests/Css/Navbar.css";
import Img from "../assests/image/pvr.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { movieId } from "../Store/MovieSlice";
import { fetchSearchdata } from "../utils/middleware";
import { getsearchloading } from "../Store/HomeSlice";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchfield, setSearchfield] = useState("");
  const contents1 = useSelector((state) => state.HomeExplore.content1);
  const contents2 = useSelector((state) => state.HomeExplore.content2);
  const contents3 = useSelector((state) => state.HomeExplore.content3);
  const Searchloading = useSelector((state) => state.HomeExplore.searchloading);
  const Searchdata = useSelector((state) => state.HomeExplore.searchcontent);
  const [enable,setEnable]=useState(false);
  
  const handleMovie = (value) => {
    setSearchfield("");
    dispatch(getsearchloading());
    dispatch(movieId(value));
    navigate(`/movie/${value}`);
  };
  const handleLinkMovie = (value, data) => {  
    navigate(`/movie_all/${value}`, { state: { data } });
  };
  const handleSearchMovie = (value, data) => {
    setSearchfield("");
    dispatch(getsearchloading());
    console.log("ALL MOVIES");
    navigate(`/movie_all/${value}`, { state: { data } });
  };

  useEffect(() => {
    if (searchfield.length >= 3) {
      dispatch(fetchSearchdata(searchfield));
    } else {
      dispatch(getsearchloading());
    }
  },[searchfield]);

  const buttonRef = useRef(null);
  const handleLinkClick = () => {
    if (window.innerWidth <= 992) {
      buttonRef.current.click();
    }
  };
  return (
    <nav  className="navbar navbar-expand-lg" style={{ backgroundColor: enable ? 'black' : 'transparent' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={Img} alt="no data" />
        </Link>
        <button
          ref={buttonRef}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded={enable}
          aria-label="Toggle navigation"
          onClick={()=>setEnable(!enable)}
        >
          {enable ?
          <i class="fa-sharp fa-solid fa-xmark"
          style={{ color: "#ffffff" }}
          ></i>
          :
          <i
            className="fa-sharp fa-solid fa-bars"
            style={{ color: "#ffd700" }}
          ></i>}
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style={{ "--bs-scroll-height": "100px" }}
          >
            <li className="nav-item" onClick={() =>{handleLinkClick()}}>
              <Link className="nav-link active" aria-current="page" to="/">
                <span className="navbar_icon">
                  <i
                    className="fa-sharp fa-solid fa-house"
                    style={{ color: "#fff" }}
                  ></i>
                </span>
                HOME
              </Link>
            </li>
            <li className="nav-item" onClick={() =>{handleLinkMovie("trending", contents1);
            handleLinkClick()}}>
              <Link className="nav-link">
                {" "}
                <span className="navbar_icon">
                  <i
                    className="fa-sharp fa-solid fa-fire-flame-curved"
                    style={{ color: "#fff" }}
                  ></i>
                </span>
                TRENDING
              </Link>
            </li>
            <li
              className="nav-item"
              onClick={() =>{handleLinkMovie("now_playing", contents2);
              handleLinkClick();}}
            >
              <Link className="nav-link">
                {" "}
                <span className="navbar_icon">
                  <i
                    className="fa-sharp fa-solid fa-compact-disc"
                    style={{ color: "#fff" }}
                  ></i>
                </span>
                MOVIES
              </Link>
            </li>
            <li
              className="nav-item"
              onClick={() =>{ handleLinkMovie("trending_tv", contents3);
              handleLinkClick();}}
            >
              <Link className="nav-link">
                <span className="navbar_icon">
                  <i
                    className="fa-sharp fa-solid fa-tv"
                    style={{ color: "#fff" }}
                  ></i>
                </span>
                TVSERIES
              </Link>
            </li>
          </ul>

          <span className="navbar_searchBar">
            <input
              id="searchQueryInput"
              type="text"
              name="searchQueryInput"
              value={searchfield}
              onChange={(e) => setSearchfield(e.target.value)}
              placeholder="Search"
            />
            <button
              id="searchQuerySubmit"
              type="submit"
              name="searchQuerySubmit"
            >
              <svg
                style={{ width: "24px", height: "24px" }}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#666666"
                  d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                />
              </svg>
            </button>
          </span>
          {searchfield.length >= 2 &&
            (Searchloading ? (
              <div className="noResults">
                <span class="loader"></span>
              </div>
            ) : Searchdata.results.length !== 0 ? (
              <div className="searchResults">
                {Searchdata.results.slice(0, 3).map((movie, index) => (
                  <div
                    className="movie-container"
                    onClick={() =>{handleMovie(movie.id);;
                    handleLinkClick();}}
                    key={index}
                  >
                    <div className="movie-image-side">
                      {movie.poster_path !== null ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                          alt={movie.title}
                          className="movie-image"
                        />
                      ) : movie.backdrop_path !== null ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                          alt={movie.title}
                          className="movie-image"
                        />
                      ) : (
                        <img
                          src={`https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg`}
                          alt={movie.title}
                          className="movie-image"
                        />
                      )}
                    </div>
                    <div className="movie-details-side">
                      <h1 className="movie-title">{movie.title}</h1>
                      <p className="movie-details">
                        <span className="release-date">Release Date:</span>{" "}
                        {movie.release_date}
                      </p>
                      <p className="movie-details">
                        Rating: {movie.vote_average.toFixed(1)}
                      </p>
                      {movie.vote_average > 7 ? (
                        <span className="must-watch">Must Watch</span>
                      ) : (
                        <span className="less-watch">Low Rating</span>
                      )}
                    </div>
                  </div>
                ))}
                {Searchdata.results.length >= 3 && (
                  <div
                    className="more_data"
                    onClick={() =>{
                      handleSearchMovie("search_movies", Searchdata.results);
                      handleLinkClick();}
                    }
                  >
                    <p>Load More...</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="noResults">
                <p>No Movie Found</p>
              </div>
            ))}

          <form className="d-flex">
            <button className="navbar_btn" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
      <hr></hr>
    </nav>
  );
};

export default Navbar;

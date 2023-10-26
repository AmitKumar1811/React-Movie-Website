import React, { useEffect, useState } from "react";
import "../assests/Css/view_more.css";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { movieId } from "../Store/MovieSlice";
import FilterOption from "./FilterCanvas";

const ViewMovie = () => {
  const data = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Moviedata, setMoviedata] = useState([]);

  const Movie = useSelector((state) => state.GenreExplore.GenresMovie);

  const DisplayFirstTwoLines = (item) => {
    const lines = item.split(" ");
    const firstTwoLines = lines.slice(0, 15);
    firstTwoLines.push("...");
    const UpdatedLine = firstTwoLines.join(" ");
    return UpdatedLine;
  };

  const handleMovie = (value) => {
    console.log("movies id is", value);
    dispatch(movieId(value));
    navigate(`/movie/${value}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
 

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (data.state !== null) {
      if(data.pathname==="/movie_all/search_movies")
      {
      console.log("first runnign");
      setMoviedata(data.state.data); 
      }
      else
      {
      console.log('second')
      setMoviedata(data.state.data.results);
      }
      
    } else if (Movie.length !== 0) {
      setMoviedata(Movie.results);
    }
  }, [data.key]);

  return (
    <div>
      <div className="view_more">
        <div className="filter">
          <button className="filter_button">
            <FilterOption />
          </button>
        </div>
        <div className="moviesalldata">
          <div>
            {Moviedata === undefined ? (
              <div className="moviesloading">
                <Loader />
                <Loader />
                <Loader />
                <Loader />
                <Loader />
                <Loader />
              </div>
            ) : Moviedata === null ? (
              <h6>No Data Found</h6>
            ) : (
              Moviedata.map((item, index) => {
                return (
                  <figure className="snip1527" key={index}>
                    <div className="image">
                      <img
                        src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                        alt="yuu"
                      />
                    </div>
                    <figcaption>
                      <div
                        className="date"
                        onClick={() => handleMovie(item.id)}
                      >
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
          </div>
         { Moviedata !== undefined &&
           <div className="pagination_movie">
           <nav aria-label="...">
             <ul className="pagination">
               <li className="page-item disabled">
                 <a className="page-link" href="#d" tabindex="-1">
                   <span aria-hidden="true">&laquo;</span>
                 </a>
               </li>
               <li className="page-item">
                 <a className="page-link" href="#d">
                   1
                 </a>
               </li>
               <li className="page-item active">
                 <a className="page-link" href="#d">
                   2 <span className="sr-only">(current)</span>
                 </a>
               </li>
               <li className="page-item">
                 <a className="page-link" href="#d">
                   3
                 </a>
               </li>
               <li className="page-item">
                 <a className="page-link disabled" href="#d">
                   ...
                 </a>
               </li>
 
               <li className="page-item">
                 <a className="page-link disabled" href="#d">
                   {/* {Movie.total_pages } */} 873
                 </a>
               </li>
 
               <li className="page-item">
                 <a className="page-link" href="#d">
                   <span aria-hidden="true">&raquo;</span>
                 </a>
               </li>
             </ul>
           </nav>  
           </div>
         }
         
        </div>
      </div>
    </div>
  );
};
export default ViewMovie;

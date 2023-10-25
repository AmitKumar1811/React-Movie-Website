import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../assests/Css/Offcanvas.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenre, fetchGenreMovies } from "../utils/middleware";
import { useNavigate } from "react-router-dom";

const FilterOption = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleMovieGenere = (id, value) => {
    dispatch(fetchGenreMovies(id));
    handleClose();
    console.log("movies ", value, id);
    navigate(`/movie_all/${value}`);
  };

  const dispatch = useDispatch();
  const data = useSelector((state) => state.GenreExplore.Genres.genres);

  useEffect(() => {
    dispatch(fetchGenre());
  }, []);

  return (
    <>
      <div onClick={handleShow}>
        <i className="fa-solid fa-filter"></i>filter
      </div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="top"
        backdrop="true"
        scroll="true"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h2>Movies</h2>
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <div className="filter_btn">
            {data?.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => handleMovieGenere(item.id, item.name)}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default FilterOption;

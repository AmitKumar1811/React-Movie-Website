import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../assests/Css/DailyModal.css';

function Daily_Modal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    const todayday = new Date().getDate();

    if (localStorage.getItem('day') !== todayday.toString()) {
      localStorage.setItem('day', todayday);
      handleShow();
    }
  }, []);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Welcome to Our Movies Website</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Thank you for visiting our Movies website! We're excited to have you here.
            Discover a wide range of movies, explore genres, and search for your favorite films.
          </p>
          <p>Any Issue? Drop Mail : <a href="mailto:amitsuthar316@gmail.com">amitsuthar316@gmail.com</a></p>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Explore Movies
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Daily_Modal;

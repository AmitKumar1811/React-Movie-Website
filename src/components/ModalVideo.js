import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../assests/Css/SingeMovie.css';
import { useSelector } from 'react-redux';
const ModalVideo=({id})=>
{
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const MovieId=useSelector((state)=>state.Movie.value.payload);
  const [data,setData]=useState([]);
  const style = {
    button: {
      backgroundColor: '#007bff', // Blue color
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      padding: '10px 20px',
      cursor: 'pointer',
    },
    modalBody: {
      backgroundColor: 'black',
      padding: '0px',
      borderRadius: '0',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    modalTitle: {
      fontSize: '24px',
      margin: '0px',
    },
    iframe: {
      width: '100%',
      height: '500px',
      border: 'none',
    },
    ModalHeader:{
    padding:'0.5rem',
    color:"white",
    backgroundColor:"black",
    }
  };



  const VideoData = async () => {
    const result = await fetch(
      `https://api.themoviedb.org/3/movie/${MovieId}/videos?api_key=1c00b53723982daca17d66f3b4630986`
    );
    const res = await result.json();
    setData(res.results);
  };

  useEffect(()=>{
  VideoData()
  },[MovieId])


  return (
    <>
     {data===undefined ?
     <p>Not Available...</p> : 
     data.length===0  ?
     <p className='trailer_details'>Not Available...</p>
     :
      <>
      <button onClick={handleShow} style={style.button}>
        Watch Trailer
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={style.ModalHeader}>
          <Modal.Title style={style.modalTitle}>{data[0].name}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={style.modalBody}>
          <iframe
            src={`https://www.youtube.com/embed/${data[0].key || data[1].key}`}
            title="YouTube video player"
            style={style.iframe}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
      </>
}
    </>
  );
}

export default ModalVideo;
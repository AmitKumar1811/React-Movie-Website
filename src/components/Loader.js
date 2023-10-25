import "../assests/Css/Movie.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const  Loader=()=>
{
  return (
    <figure className="snip1527">
      <div className="image">
        <Skeleton width="100%" height="380px" />
      </div>
      <figcaption>
        <div className="date">
          <i
            className="fa-sharp fa-solid fa-play fa-xl"
            style={{ color: "#7D146D" }}
          ></i>
        </div>
        <h5>
          <Skeleton
            width="80%"
            baseColor="#FFFFFF"
            highlightColor="#EBEBEB"
            borderRadius="0.5rem"
          />
        </h5>

        <p>
          <Skeleton
            width="100%"
            baseColor="#FFFFFF"
            highlightColor="#EBEBEB"
            borderRadius="0.5rem"
          />
        </p>
        <p>
          <Skeleton
            width="100%"
            baseColor="#FFFFFF"
            highlightColor="#EBEBEB"
            borderRadius="0.5rem"
          />
        </p>
        <p>
          <Skeleton
            width="100%"
            baseColor="#FFFFFF"
            highlightColor="#EBEBEB"
            borderRadius="0.5rem"
          />
        </p>
      </figcaption>
    </figure>
  );
}

export default Loader;

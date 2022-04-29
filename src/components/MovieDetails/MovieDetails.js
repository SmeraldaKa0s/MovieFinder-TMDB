import styles from "./styles.module.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { imgUrl } from "../../utils/variables";
import Loader from "../Loader";
import { useContext } from "react";
import Context from "../../context/Context";
import Video from "../Video/Video";
import { useState } from "react";
import { IoIosArrowForward as ArrowButton } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const context = useContext(Context);
  const { id, type } = useParams()
  const { data, isLoading } = useFetch(id, type)
  const { title, name, original_title, overview, genres, poster_path, backdrop_path, release_date } = data;
  const [watchVideo, setWatchVideo] = useState(false);
  const navigate = useNavigate();

  const handleClickOpenVideo = () => {
    setWatchVideo(true);
  }
  const handleClickCloseVideo = () => {
    setWatchVideo(false);
  }

  if (data?.success === false) navigate('/404');

  return (
    <>
      <Loader isLoading={isLoading} />
      <div className={styles.containerDetails}>
        <img src={`${imgUrl}${backdrop_path || poster_path}`} />
        <div className={styles.boxDetails}>
          <h1 className={styles.titleDetail}>{title && title.toUpperCase()}</h1>
          <small className={`${styles.subtitle} `}>{original_title && original_title.toUpperCase()} {release_date && release_date.slice(0, 4)}</small>
          <div className={styles.caption}>
            <ul>
              <h2 className={styles.titleGenero}> {context.language === "es" ? "Géneros" : "Genres"} </h2>
              {genres && genres.map(({ id, name }) => <li key={id}>  ◉ {name}</li>)}
            </ul>
            <p>{overview}</p>
            <button
              className={styles.boxButton}
              onClick={handleClickOpenVideo}>
              Trailer
              <ArrowButton className={styles.iconTrailer} />
            </button>
          </div>
        </div>
        {watchVideo && <Video
          handleClickCloseVideo={handleClickCloseVideo}
          id={id}
        />}
      </div>


      <div className={styles.captionMobile}>
        <ul>
          <h2 className={styles.titleGeneroMobile}> {context.language === "es" ? "Géneros" : "Genres"} </h2>
          {genres && genres.map(({ id, name }) => <li key={id}>  ◉ {name}</li>)}
        </ul>
        <p>{overview}</p>
        <button
          className={styles.boxButtonMobile}
          onClick={handleClickOpenVideo}>
          Trailer
          <ArrowButton className={styles.iconTrailer} />
        </button>
      </div>
      {watchVideo && <Video
        handleClickCloseVideo={handleClickCloseVideo}
        id={id}
      />}
    </>
  )
};

export default MovieDetails;

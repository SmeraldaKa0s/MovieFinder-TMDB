import styles from "./styles.module.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { imgUrl } from "../../utils/variables";
import Loader from "../Loader";
import { useContext } from "react";
import Context from "../../context/Context";
import Video from "../Video/Video";
import { BiRadioCircleMarked as CircleIcon } from "react-icons/bi";
import { useState, useEffect } from "react";
import { baseUrl, apiKey } from "../../utils/variables";
import { IoIosArrowForward as ArrowButton } from "react-icons/io";

const MovieDetails = () => {
  const context = useContext(Context);
  const { id, type } = useParams()
  const { data, isLoading } = useFetch(id, type)
  const { title, name, original_title, overview, genres, poster_path, backdrop_path, release_date } = data;
  const [watchVideo, setWatchVideo] = useState(false);

  const handleClickOpenVideo = () => {
    setWatchVideo(true);
  }
  const handleClickCloseVideo = () => {
    setWatchVideo(false);
  }




  return (
    <>
      <Loader isLoading={isLoading} />
      <div className={styles.containerDetails}>
        <img src={`${imgUrl}${backdrop_path}`} />
        {/* <img className="w-full lg:w-2/6" src={`${imgUrl}${poster_path}`} /> */}
        <div className={styles.boxDetails}>
          <h1 className={styles.titleDetail}>{title && title.toUpperCase()}</h1>
          <div className={styles.positionSubtitle}>
            <small className={`${styles.subtitle} `}>{original_title && original_title.toUpperCase()} {release_date && release_date.slice(0, 4)}</small>
          </div>
          {/* <h2 className={styles.titleGenero}> {context.language === "es" ? "Géneros" : "Genres"} </h2> */}
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
    </>
  )
};

export default MovieDetails;

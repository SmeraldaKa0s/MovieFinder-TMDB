import styles from "./styles.module.scss";
import useFetchDetails from "../../hooks/useFetchDetail";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";


const Video = ({ handleClickCloseVideo, id }) => {


  const element = useFetchDetails(id, "videos")
  const { results } = element

  console.log(element, 'element')
  if (!results) return null;   
  
  return (
    <div onClick={handleClickCloseVideo}
      className={styles.modalVideo}>
      {results?.length && results[0].site === "YouTube" ?
        <iframe
          src={`https://www.youtube.com/embed/${results[0]?.key}`}
          className={styles.video}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        >
        </iframe>
        :
        <iframe
          src={`https://player.vimeo.com/video/${results[0]?.key}`}
          className={styles.video}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        >
        </iframe>
      }
      <button onClick={handleClickCloseVideo}>
        <CloseIcon className={styles.iconVideo} />
      </button>
    </div>
  )
}

export default Video; 
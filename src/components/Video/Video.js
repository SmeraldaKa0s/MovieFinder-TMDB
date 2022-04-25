import styles from "./styles.module.scss";
import useFetchDetails from "../../hooks/useFetchDetail";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";


const Video = ({ handleClickCloseVideo, id }) => {


  const element = useFetchDetails(id, "videos")
  const { results } = element

  console.log(element, 'element')

  return (
    <div onClick={handleClickCloseVideo}
      className={styles.modalVideo}>
      {results && results[0].site === "YouTube" ?
        <iframe
          src={`https://www.youtube.com/embed/${results && results[0].key}`}
          className={styles.video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>
        :
        <iframe
          src={`https://player.vimeo.com/video/${results && results[0].key}`}
          className={styles.video}
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
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
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import imageBroke from "../../assets/imageBroke.jpg";
import { imgUrl } from "../../utils/variables";

const ItemMovie = props => {
  const { title, image, id, type } = props;
  return (
    <Link to={`/${type}/${id}`}>
      <article className={styles.container}>
        <div className={styles.containerImg}>
          {
            image ?
              <img
                src={`${imgUrl}${image}`}
                alt={title}
              />
              :
              <img
                src={imageBroke}
                alt="Rota o caida"
              />
          }
        </div>
        <h3 className={styles.title}>
          {title}
        </h3>
      </article>
    </Link>
  );
};

export default ItemMovie;

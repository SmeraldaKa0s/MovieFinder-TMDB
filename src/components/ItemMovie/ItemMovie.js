import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const ItemMovie = props => {
  const { title, image, id, type } = props;
  return (
    <Link to={`/${type === 'tv' ? 'series' : 'movies'}/${id}`}>
      <article className={styles.container}>
        <div className={styles.containerImg}>
          {
            image ?
              <img
                src={`https://image.tmdb.org/t/p/original${image}`}
                alt={title}
              />
              :
              <img
                src={`https://www.placecage.com/690/1035 `}
                alt={title}
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

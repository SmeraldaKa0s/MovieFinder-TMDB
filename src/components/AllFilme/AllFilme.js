import styles from "./styles.module.scss";
import ItemMovie from "../ItemMovie";
import Loader from "../Loader/Loader";

const AllFilme = ({ title, isLoading, movies }) => {
  return (
    <div className={styles.title}>
      <h2>{title}</h2>
      <Loader isLoading={isLoading} />
      <div className={`${styles.container} ${movies.length > 5 ? styles.wrapp : ''}`}>
        {movies.map((movie) => (
          <ItemMovie
            key={movie.id}
            id={movie.id}
            image={movie.poster_path ? movie.poster_path : movie.backdrop_path}
            title={movie.name ? movie.name : movie.title}
            type={movie.media_type === 'tv' ? 'tv' : 'movie'}
          />
        ))}
      </div>
    </div>
  );
};

export default AllFilme;

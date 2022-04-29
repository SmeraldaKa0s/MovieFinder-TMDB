import ItemMovie from "../ItemMovie";
import styles from "./styles.module.scss";

const MoviesGrid = ({ movies }) => {
  return (
    <div className={styles.containerMovies}>
      {
        movies.map(movie => (
          <ItemMovie
            key={movie.id}
            id={movie.id}
            image={movie.poster_path ? movie.poster_path : movie.backdrop_path}
            title={movie.title}
            type= "movie"
          />
        ))
      }
    </div>
  )
}

export default MoviesGrid;

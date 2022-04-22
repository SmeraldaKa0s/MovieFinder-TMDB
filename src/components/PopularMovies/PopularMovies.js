import styles from "./styles.module.scss";
import useFetch from "../../hooks/useFetch";
import MoviesGrid from "../MoviesGrid";

const PopularMovies = () => {
  const { data: movies, isLoading } = useFetch("popular", "movie")

  return (
    <div>
      <section className={styles.PopularMovies}>
        <h2>Popular Movies</h2>

        <MoviesGrid movies={movies} />

      </section>
    </div>
  )
}

export default PopularMovies; 
import styles from "./styles.module.scss";
import useFetch from "../../hooks/useFetch";
import MoviesGrid from "../MoviesGrid";

const UpcomingMovies = () => {
  const { data: movies, isLoading } = useFetch("upcoming", "movie")

  return (
    <div>
      <section className={styles.Upcoming}>
        <h2>Upcoming Movies</h2>

        <MoviesGrid movies={movies} />

      </section>
    </div>
  )
}

export default UpcomingMovies; 
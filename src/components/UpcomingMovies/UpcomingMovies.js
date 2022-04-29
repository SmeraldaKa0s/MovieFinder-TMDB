import styles from "./styles.module.scss";
import useFetch from "../../hooks/useFetch";
import MoviesGrid from "../MoviesGrid";
import { useContext } from "react";
import Context from "../../context/Context";
import Loader from "../Loader";

const UpcomingMovies = () => {
  const context = useContext(Context);
  const { data: movies, isLoading } = useFetch("upcoming", "movie")

  return (
    <div>
      <Loader isLoading={isLoading} />
      <section className={styles.Upcoming}>
        <h2>{context.language === "es" ? "Próximas peliculas" : "Upcoming Movies"}</h2>
        <MoviesGrid movies={movies} />
      </section>
    </div>
  )
}

export default UpcomingMovies; 
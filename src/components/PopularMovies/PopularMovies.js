import styles from "./styles.module.scss";
import useFetch from "../../hooks/useFetch";
import MoviesGrid from "../MoviesGrid";
import { useContext } from "react";
import Context from "../../context/Context";
import Loader from "../Loader";

const PopularMovies = () => {
  const context = useContext(Context);
  const { data: movies, isLoading } = useFetch("popular", "movie")

  return (
    <div>
      <Loader isLoading={isLoading} />
      <section className={styles.PopularMovies}>
        <h2>{context.language === "es" ? "Películas Populares" : "Popular Movies"}</h2>
        <MoviesGrid movies={movies} />
      </section>
    </div>
  )
}

export default PopularMovies; 
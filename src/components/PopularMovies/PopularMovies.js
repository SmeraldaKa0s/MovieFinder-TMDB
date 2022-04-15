import styles from "./styles.module.scss"; 
import useFetch from "../../hooks/useFetch";

const PopularMovies = () => {
  const { data: movies, isLoading} = useFetch( "popular", "movie")

  return(
    <div>
      <section className={styles.PopularMovies}>
      <h2>Popular Movies</h2>

      {isLoading && <p>CARGANDOOOOOOOOOOOOOOOOOOOOO</p>}

      {movies.map(pelicula => (
        <h3 key={movies.id}>{pelicula.title}</h3>
      ))}

       
      </section>
    </div>
  )
}

export default PopularMovies; 
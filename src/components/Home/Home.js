import AllFilme from "../AllFilme/AllFilme";
import useFetch from "../../hooks/useFetch";
import Carousel from "../Carousel";
import { arrayCut } from "../../utils/variables";
import { useContext } from "react";
import Context from "../../context/Context";

const Home = () => {
  const context = useContext(Context);

  const { data: movies, isLoading: isLoadingMovies } = useFetch("popular", "movie")
  const { data: topRated, isLoading: isLoadingTopRated } = useFetch("top_rated", "movie")

  return (
    <div>
      <section>
        <Carousel type="movie" />
        <AllFilme
          title={context.language === "es" ? "Películas Populares" : "Popular Movies"}
          isLoading={isLoadingMovies}
          movies={arrayCut(movies)}
        />

        <AllFilme
          title={context.language === "es" ? "Mejor puntuadas" : "Top Rated"}
          isLoading={isLoadingTopRated}
          movies={arrayCut(topRated)}
        />
      </section>
    </div>
  );
};

export default Home;

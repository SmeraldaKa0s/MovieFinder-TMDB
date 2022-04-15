import styles from "./styles.module.scss";
import AllFilme from "../AllFilme/AllFilme";
import useFetch from "../../hooks/useFetch";
import Carousel from "../Carousel";
import { arrayCut } from "../../utils/variables";
import { useContext } from "react";
import Context from "../../context/Context";

const Home = () => {
  const context = useContext(Context);

  const { data: movies, isLoading: isLoadingMovies} = useFetch( "popular", "movie")
  const { data: series, isLoading: isLoadingSeries} = useFetch( "popular", "tv")

  return (
    <div>
      <section className={styles.home}>
        <Carousel /> 
        <AllFilme
          title={context.language === "es" ? "Películas Populares" : "Popular Movies"}
          isLoading={isLoadingMovies}
          movies={arrayCut(movies)}
          isTv={false}
        />

        <AllFilme 
         title="Popular Series"
         isLoading={isLoadingSeries}
         movies={arrayCut(series)}
         isTv={true}
        />
      </section>
    </div>
  );
};

export default Home;

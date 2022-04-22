import styles from "./styles.module.scss";
import ItemMovie from "../ItemMovie";
import Loader from "../Loader/Loader";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

const AllFilme = ({ title, isLoading, movies }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <Swiper
        className={styles.swiper}
        spaceBetween={5}
        slidesPerView="auto"
        navigation
        modules={[Navigation]}
      >
        <div>
          <Loader isLoading={isLoading} />
          <div className={`${styles.container} ${movies.length > 5 ? styles.wrapp : ''}`}>
            {movies.map((movie) => (
              <SwiperSlide className={styles.swiperSlide} key={movie.id}>
                <ItemMovie
                  id={movie.id}
                  image={movie.poster_path ? movie.poster_path : movie.backdrop_path}
                  title={movie.name ? movie.name : movie.title}
                  type={movie.name ? 'tv' : 'movie'}
                />
              </SwiperSlide>
            ))}
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default AllFilme;

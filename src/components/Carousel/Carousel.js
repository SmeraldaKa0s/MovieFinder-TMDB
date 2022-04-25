import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import ItemMovie from "../ItemMovie";

import useFetch from "../../hooks/useFetch";

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css/scrollbar';

const Carousel = ({ type }) => {
  const { data: movies, isLoading } = useFetch("now_playing", "movie");

  return (
    <Swiper
      className={styles.swiper}
      spaceBetween={50}
      slidesPerView={1}
      navigation={window && window.innerWidth > 1024}
      modules={[Navigation, Pagination]}
      pagination={{ clickable: true }}
    >
      {
        movies && movies.map(({ id, backdrop_path, title }) => (
          <SwiperSlide key={id}>
            <article className={styles.slideCard}>
              <div className={styles.containerImg}>
                <img
                  src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                  alt={title}
                />
              </div>
              <h3 className={styles.title}>
                {title}
              </h3>
            </article>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default Carousel 
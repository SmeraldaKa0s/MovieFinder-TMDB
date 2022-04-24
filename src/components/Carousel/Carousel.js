import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Link } from "react-router-dom";
import { IoIosArrowForward as ArrowButton } from "react-icons/io";
import useFetch from "../../hooks/useFetch";

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css/scrollbar';

const Carousel = ({type}) => {
  const { data: movies, isLoading } = useFetch("now_playing", "movie");

  return (
    <Swiper
      className={styles.swiper}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      modules={[Navigation, Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
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
              <div>
                <h3 className={styles.title}>
                  {title && title.toUpperCase()}
                </h3>
                <Link to={`/${type}/${id}`} className={styles.buttonCarousel} >
                  <button>See more</button>
                  <ArrowButton className={styles.icon} />
                </Link>
              </div>
            </article>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default Carousel 
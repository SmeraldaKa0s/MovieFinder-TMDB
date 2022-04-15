import styles from "./styles.module.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { imgUrl } from "../../utils/variables";
import Loader from "../Loader";

import { useState, useEffect } from "react";

const MovieDetails = () => {
  const { id, type } = useParams()
  const { data, isLoading } = useFetch(id, type === 'series' ? 'tv' : 'movie')
  const { title, name, original_title, overview, genres, poster_path } = data;

  return (
    <>
      <Loader isLoading={isLoading} />
      <div className="flex flex-col lg:flex-row">
        <img className="w-full lg:w-2/6" src={`${imgUrl}${poster_path}`} />
        <div className="flex flex-col p-10">
          <h1 className="text-5xl font-bold">{title ? title : name }</h1>
          <small className="text-xs">{original_title}</small>
          <p className="mt-10">{overview}</p>
          <h2 className="text-xl mt-10">Géneros</h2>
          <ul className="flex gap-8">
            {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </ul>
        </div>
      </div>
    </>
  )
};

export default MovieDetails;

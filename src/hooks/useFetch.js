import { useState, useEffect } from "react";
import { useContext } from "react";
import Context from "../context/Context";

const apiKey = "8affe8be373f48968e6754586fd5924d"

const useFetch = (id, type) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const context = useContext(Context);

  const getUrl = () => {
    let url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}&language=${context.language}`
    if (type === 'search') return `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=${context.language}&query=${id}`

    return url;
  }

  useEffect(() => {
    if (!id) return { data: [], isLoading: false };

    setIsLoading(true);
    const fetchApi = async () => {
      try {
        const res = await fetch(getUrl());
        const response = await res.json();

        setIsLoading(false);
        if (response.results) return setData(response.results);
        return setData(response);
      } catch (error) {
        console.error(error)
      }
    };
    fetchApi();
  }, [id, context]);


  return ({
    data: !data.length ? data : data.filter(data => data.media_type === "tv" || data.media_type === "movie" || !data.media_type ),
    isLoading,
  })
};

export default useFetch;

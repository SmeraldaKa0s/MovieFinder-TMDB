import { useState, useEffect } from "react";
import { useContext } from "react";
import { apiKey } from "../utils/variables";
import Context from "../context/Context";

const useFetch = (id, type) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const context = useContext(Context);

  const getUrl = () => {
    let url = `https://api.themoviedb.org/3/${type}/${id}${apiKey}&language=${context.language}`
    if (type === 'search') return `https://api.themoviedb.org/3/search/movie${apiKey}&language=${context.language}&query=${id}`

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
    data,
    isLoading,
  })
};

export default useFetch;

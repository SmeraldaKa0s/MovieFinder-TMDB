import styles from "./styles.module.scss";
import { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { RiSearch2Line as SearchIcon } from "react-icons/ri";
import useFetch from "../../hooks/useFetch";
import AllFilme from "../AllFilme";

const Search = () => {
  const { search } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams({ q: search });
  const [inputValue, setInputValue] = useState(searchParams.get('q'));
  const { data: results, isLoading } = useFetch(inputValue, 'search');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = event => {
    const { target: { value } } = event;
    event.preventDefault();
    setInputValue(value);
    setSearchParams({ q: value });
  };

  console.log(results)

  return (
    <section className="px-24">
      <form
        onSubmit={handleSubmit}
        className={styles.form}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className={styles.input}
        />
        <button>
          <SearchIcon className={styles.search} />
        </button>
      </form>
    {
      results.length ?  
      <AllFilme
      title="Resultados"
      isLoading={isLoading}
      movies={results}
      />
      : 
      <p className="text-4xl">No hay resultados</p> 
    }
    </section>
  );
};

export default Search;

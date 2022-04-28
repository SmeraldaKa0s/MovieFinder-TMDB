import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { RiSearch2Line as SearchIcon } from "react-icons/ri";
import useFetch from "../../hooks/useFetch";
import MoviesGrid from "../MoviesGrid";
import Error404 from "../Error404/Error404";

const Search = () => {
  const { search } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams({ q: search });
  const [inputValue, setInputValue] = useState(searchParams.get('q'));
  const [searchValue, setSearchValue] = useState('')
  const { data: results, isLoading } = useFetch(searchValue, 'search');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue(inputValue);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
    setSearchParams({ q: event.target.value });
  };

  useEffect(() => {
    setSearchValue(inputValue);
  }, []);

  return (
    <section className={styles.section}>
      <form
        onSubmit={handleSubmit}
        className={styles.form}>
        <button className={styles.search}>
          <SearchIcon />
        </button>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className={styles.input}
        />
      </form>
      {
        results.length ?
          <MoviesGrid movies={results} />
          :
          <Error404
          title="No results" />
      }
    </section>
  );
};

export default Search;

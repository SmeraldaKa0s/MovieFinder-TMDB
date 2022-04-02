import styles from "./styles.module.scss";
import { useState, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Context from "../../context/Context";
import { RiSearch2Line as SearchIcon } from "react-icons/ri";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams({
    query: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search/")
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setSearchParams({
      query: e.target.value,
    });
  };
  return (
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
  );
};

export default Search;

import styles from "./styles.module.scss";
import { RiSearch2Line as SearchIcon } from "react-icons/ri";

const Search = () => (
  <form className={styles.form}>
    <input type="text" placeholder="What are you looking for?" className={styles.input} />
    <button>
      <SearchIcon className={styles.search}/>
    </button>
  </form>
);

export default Search;

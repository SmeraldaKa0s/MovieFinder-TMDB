import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { BiHomeAlt as HomeIcon } from "react-icons/bi";
import { AiOutlineVideoCamera as CameraIcon } from "react-icons/ai";
import { MdMonitor as MonitorIcon } from "react-icons/md";
import Translate from "../Translate";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?q=${query}`);
  };

  return (
    <nav className={styles.container}>
      <ul>
        <Link to="/" className={styles.link}>
          <li>
            <HomeIcon />
          </li>
        </Link>
        <Link to="/movies" className={styles.link}>
          <li>
            <CameraIcon />
          </li>
        </Link>
        <Link to="/series" className={styles.link}>
          <li>
            <MonitorIcon />
          </li>
        </Link>
        {window.location.pathname !== "/search" && (
          <form onSubmit={onSubmit}>
            <input
              value={query}
              onInput={({ target }) => setQuery(target.value)}
            />
          </form>
        )}
      </ul>
      <div>
        <Translate />
      </div>
    </nav>
  );
};

export default Navbar;

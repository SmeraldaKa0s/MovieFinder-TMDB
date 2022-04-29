import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { BiHomeAlt as HomeIcon } from "react-icons/bi";
import { AiOutlineVideoCamera as CameraIcon } from "react-icons/ai";
import { RiSearch2Line as SearchIcon } from "react-icons/ri";
import { MdMonitor as MonitorIcon } from "react-icons/md";
import Translate from "../Translate";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'

const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?q=${query}`);
  };

  return (
    <>
      <nav className={styles.navBurger}>
        <Menu>
          <ul className={styles.linksMobile}>
          <Link to="/search" className={styles.link}>
              <li>
                <p>Search</p>
              </li>
            </Link>
            <Link to="/" className={styles.link}>
              <li>
                <p>Home</p>
              </li>
            </Link>
            <Link to="/movies" className={styles.link}>
              <li>
                <p>Popular Movies</p>
              </li>
            </Link>
            <Link to="/upcoming" className={styles.link}>
              <li>
                <p>Upcoming Movies</p>
              </li>
            </Link>
            <div className={styles.translateMobile}>
              <Translate />
            </div>

          </ul>
        </Menu>
      </nav>

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
          <Link to="/upcoming" className={styles.link}>
            <li>
              <MonitorIcon className={styles.iconNav} />
            </li>
          </Link>
        </ul>
        {window.location.pathname !== "/search" && (
          <form className={styles.formNav} onSubmit={onSubmit}>
            <button>
              <SearchIcon className="-mr-10 ml-3" />
            </button>
            <input
              value={query}
              onInput={({ target }) => setQuery(target.value)}
              className={styles.input}
            />
          </form>
        )}
        <div className={styles.translate}>
          <Translate />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

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
import { useContext } from "react";
import Context from "../../context/Context";

const Navbar = () => {
  const context = useContext(Context);
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
                <p>{context.language === "es" ? "Buscar" : "Search"}</p>
              </li>
            </Link>
            <Link to="/" className={styles.link}>
              <li>
                <p>{context.language === "es" ? "Principal" : "Home"}</p>
              </li>
            </Link>
            <Link to="/movies" className={styles.link}>
              <li>
                <p>{context.language === "es" ? "Películas Populares" : "Popular Movies"}</p>
              </li>
            </Link>
            <Link to="/upcoming" className={styles.link}>
              <li>
                <p>{context.language === "es" ? "Próximas peliculas" : "Upcoming Movies"}</p>
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
              <HomeIcon aria-label="home" />
            </li>
          </Link>
          <Link to="/movies" className={styles.link}>
            <li>
              <CameraIcon aria-label="popular movies" />
            </li>
          </Link>
          <Link to="/upcoming" className={styles.link}>
            <li>
              <MonitorIcon
                className={styles.iconNav}
                aria-label="upcoming movies"
              />
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

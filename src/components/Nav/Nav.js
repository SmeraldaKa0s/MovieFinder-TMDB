import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { BiHomeAlt as HomeIcon } from "react-icons/bi";
import { AiOutlineVideoCamera as CameraIcon } from "react-icons/ai";
import { MdMonitor as MonitorIcon } from "react-icons/md";
import Search from "../Search";
import Translate from "../Translate";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.navIcon}>
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
        <Search />
      </ul>
      <div>
        <Translate />
      </div>
    </nav>
  );
};

export default Navbar;

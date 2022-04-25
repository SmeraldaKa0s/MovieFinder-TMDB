import styles from "./styles.module.scss";
import imageFooter from "../../assets/tmdbLogo.svg";
import { FaLinkedinIn } from 'react-icons/fa';
import { VscMail } from 'react-icons/vsc';
import { FiGithub, FiExternalLink } from 'react-icons/fi';


const Footer = () => {
  return (
    <footer className={styles.containerFooter}>
      {/* <p>Developed by Alekx</p> */}
      <ul className={styles.boxContact}>
        <li className={styles.listFooter}>
          <a href="https://github.com/SmeraldaKa0s/MovieFinder-TMDB"
            target="_blank">
            <FiGithub aria-label="GitHub" />
          </a>
        </li>
        <li className={styles.listFooter}>
          <a href="https://www.linkedin.com/in/alx-l"
            target="_blank">
            <FaLinkedinIn aria-label="LinkedIn" />
          </a>
        </li>
        <li className={styles.listFooter}>
          <a href="mailto:alek.xandra.lerner@gmail.com"
            target="_blank">
            <VscMail aria-label="Gmail" />
          </a>
        </li>
      </ul>
      <div className={styles.boxLinkApi}>
        <a href="https://developers.themoviedb.org/3/getting-started/introduction" aria-label="Link">
          <FiExternalLink className={styles.icoLinkApi} aria-label="link a api"/>
          </a>
      </div>
    </footer>
  )
}

export default Footer
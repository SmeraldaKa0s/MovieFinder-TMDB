import styles from "./styles.module.scss";
import Sketch from "../Sketch";
import { GiBrokenBone } from "react-icons/gi";



const Error404 = ({ title = 'Page not found' }) => {
  return (
    <div className={styles.containerError}>
      <div className={styles.boxError}>
        <h2>No Signal</h2>
        <GiBrokenBone className={styles.iconError} />
        <h3>{title}</h3>
      </div>
      <Sketch />
    </div>
  );
};

export default Error404;

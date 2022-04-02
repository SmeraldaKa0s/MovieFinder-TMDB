import styles from "./styles.module.scss";

const Button = ({ title, color = "blue" }) => {
  return (
   
      <button className={styles.button}>{title}</button>

  );
};

export default Button;

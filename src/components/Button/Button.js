import styles from "./styles.module.scss";

const Button = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={styles.button}>
      {title}
    </button>
  );
};

export default Button;

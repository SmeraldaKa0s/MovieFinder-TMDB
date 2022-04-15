import styles from "./styles.module.scss";

const Loader = ({isLoading}) => {
  return (
    isLoading && <div className={styles.loader}></div>
  )
}

export default Loader
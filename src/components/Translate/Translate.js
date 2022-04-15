import Button from "../Button/";
import styles from "./styles.module.scss";
import { useContext } from "react";
import Context from "../../context/Context";

const Translate = () => {
  const context = useContext(Context);

  const handleClickLanguage = (value) => {
    console.log(value)
    context.setLanguage(value);
  };

  return (
    <div className={styles.container}>
      <Button 
      onClick={() => handleClickLanguage('es')} 
      title="ES" 
     />
      <Button 
      onClick={() => handleClickLanguage('en')} 
      
      title="EN" 
     />
    </div>
  );
};

export default Translate;

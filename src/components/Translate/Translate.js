import Button from "../Button/";
import { useContext } from "react";
import Context from "../../context/Context";

const Translate = () => {
  const context = useContext(Context);

  const handleClickLanguage = (e) => {
    context.setLanguage(e.target.value);
  };

  return (
    <div className="px-2">
      <Button 
      onClick={handleClickLanguage} 
      title="ES" 
      value="es" />
      <Button onClick={handleClickLanguage} 
      title="EN" 
      value="en" />
    </div>
  );
};

export default Translate;

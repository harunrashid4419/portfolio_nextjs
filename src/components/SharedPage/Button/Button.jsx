import { FaArrowRight } from "react-icons/fa";
import style from "./Button.style.module.css";

const Button = ({content}) => {
  return (
    <button className={style.buttons}>
      <span className={style.content}>{content}</span>
      <FaArrowRight className={style.arrowIcon} />
    </button>
  );
};

export default Button;

import style from "./OutlineButton.style.module.css";
import { IoMdDownload } from "react-icons/io";

const OutlineButton = ({ content }) => {
  return (
    <button className={style.outlineButton}>
      <IoMdDownload className={style.icon} />
      <span className={style.content}>{content}</span>
    </button>
  );
};

export default OutlineButton;

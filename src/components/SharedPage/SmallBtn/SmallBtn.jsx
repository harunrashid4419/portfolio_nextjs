import style from "./SmallBtn.style.module.css";

const SmallBtn = ({ content }) => {
  return <button className={style.smallBtn}>{content}</button>;
};

export default SmallBtn;

import style from "./Paragraph.style.module.css";

const Paragraph = ({ content }) => {
  return <p className={style.paragraph}>{content}</p>;
};

export default Paragraph;

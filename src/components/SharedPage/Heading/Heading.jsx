import style from "./Heading.style.module.css";

const Heading = ({ content }) => {
  return <h1 className={style.heading}>{content}</h1>;
};

export default Heading;
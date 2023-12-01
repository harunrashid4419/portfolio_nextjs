import Paragraph from "../Paragraph/Paragraph";
import style from "./ServiceCard.style.module.css";

const ServiceCard = ({ icon: Icon, content, paragraph }) => {
  return (
    <div className={style.serviceCard}>
      <div className={style.serviceIcon}>
        <Icon className={style.icon} />
      </div>
      <h2>{content}</h2>
      <p>{paragraph}</p>
    </div>
  );
};

export default ServiceCard;

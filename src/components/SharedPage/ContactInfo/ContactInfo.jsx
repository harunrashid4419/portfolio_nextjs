import style from "./ContactInfo.style.module.css";

const ContactInfo = ({ icon: Icon, content, info }) => {
  return (
    <div className={style.contactInfo}>
      <Icon className={style.icon} />
      <div>
        <h5 className={style.topContent}>{content}</h5>
        <h5 className={style.info}>{info}</h5>
      </div>
    </div>
  );
};

export default ContactInfo;
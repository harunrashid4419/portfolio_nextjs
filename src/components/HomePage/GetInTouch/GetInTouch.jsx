import Paragraph from "@/components/SharedPage/Paragraph/Paragraph";
import style from "./GetInTouch.style.module.css";
import Heading from "@/components/SharedPage/Heading/Heading";
import ContactInfo from "@/components/SharedPage/ContactInfo/ContactInfo";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const GetInTouch = () => {
  return (
    <div className={style.getInTouch}>
      <div className="container">
        <div className={style.touchSection}>
          <div className={style.topContent}>
            <Heading content={"Let's Get In Touch"} />
          </div>
          <div className={style.form}></div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;

import Paragraph from "@/components/SharedPage/Paragraph/Paragraph";
import style from "./GetInTouch.style.module.css";
import Heading from "@/components/SharedPage/Heading/Heading";
import ContactInfo from "@/components/SharedPage/ContactInfo/ContactInfo";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import Button from "@/components/SharedPage/Button/Button";

const GetInTouch = () => {
  return (
    <div className={style.getInTouch}>
      <div className="container">
        <div className={style.touchSection}>
          <Heading content={"Let's Get In Touch"} />
          <form className={style.form}>
            <div className={style.nameEmail}>
              <input
                className={style.inputFiled}
                type="text"
                name=""
                id=""
                placeholder="Your Name"
              />
              <input
                className={style.inputFiled}
                type="email"
                name=""
                id=""
                placeholder="Your Email"
              />
            </div>
            <textarea
              className={style.messageBox}
              name=""
              id=""
              placeholder="Your Message"
            />
            <div className={style.btn}>
              <Button content={"Send Message"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;

import Image from "next/image";
import style from "./Experience.style.module.css";
import img from "../../../Images/experience.jpg";
import { FaStar } from "react-icons/fa";
import Heading from "@/components/SharedPage/Heading/Heading";

const Experience = () => {
  return (
    <div className="container">
      <div className={style.topHeading}>
        <Heading content={"Experience"} />
      </div>
      <div className={style.experienceSection}>
        <div className={style.left}>
          <div className={style.mainContent}>
            <div className={style.content}>
              <div>
                <h1 className={style.companyName}>Future Innovation LTD.</h1>
                <p className={style.position}>Front-end developer internship</p>
              </div>
              <p className={style.date}>Aug 2023 - Nov 2023</p>
            </div>
            <p className={style.responsibility}>
              My responsibility was project design and development using React
              JS, Next JS, JavaScript, and Typescript.
            </p>
          </div>
          <FaStar className={style.icon} />
        </div>
        <div className={style.right}>
          <Image src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Experience;

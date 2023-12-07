import Heading from "@/components/SharedPage/Heading/Heading";
import style from "./About.style.module.css";
import myImg from "@/Images/my-img.jpg";
import Image from "next/image";
import Paragraph from "@/components/SharedPage/Paragraph/Paragraph";
import Button from "@/components/SharedPage/Button/Button";
import OutlineButton from "@/components/SharedPage/OutlineButton/OutlineButton";

const About = () => {
  return (
    <div id="about" className={style.about}>
      <div className="container">
        <div className={style.topHeader}>
          <Heading content={"About Me"} />
        </div>
        <div className={style.aboutSection}>
          <div className={style.left}>
            <Image className={style.img} src={myImg} alt="About Image" />
          </div>
          <div className={style.right}>
            <h1 className={style.rightHeading}>Hi</h1>
            <div className={style.paragraph}>
              <Paragraph
                content={
                  "Hello there! I'm Md. Harun Or Rashid is a passionate MERN stack developer with a knack for turning ideas into scalable and efficient web applications. Collaborative by nature, I enjoy working in agile environments where teamwork and innovation go hand in hand."
                }
              />
            </div>
            <div className={style.btn}>
              <a href="#contact">
                <Button content={"Contact Me"} />
              </a>
              <a
                href="https://drive.google.com/file/d/12Z9Q1vT8Lp3DoOIRHhSI9vamvijg5fn9/view?usp=sharing"
                target="_blank"
              >
                <OutlineButton content={"Download Resume"} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

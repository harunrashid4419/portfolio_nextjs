import Heading from "@/components/SharedPage/Heading/Heading";
import style from "./About.style.module.css";
import myImg from "@/Images/my-img.jpg";
import Image from "next/image";
import Paragraph from "@/components/SharedPage/Paragraph/Paragraph";
import Button from "@/components/SharedPage/Button/Button";
import OutlineButton from "@/components/SharedPage/OutlineButton/OutlineButton";

const About = () => {
  return (
    <div className={style.about}>
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
                  "In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis quis leo. Nulla in feugiat elit."
                }
              />
            </div>
            <div className={style.btn}>
              <Button content={"Contact Me"} />
              <OutlineButton content={"Download CV"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

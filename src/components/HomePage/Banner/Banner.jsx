"use client";
import Lottie from "lottie-react";
import style from "./Banner.style.module.css";
import animationData from "../../../../public/amimation.json";
import Typewriter from "typewriter-effect";
import Paragraph from "@/components/SharedPage/Paragraph/Paragraph";
import SocialLins from "@/components/SharedPage/SocialLinks/SocialLins";
import OutlineButton from "@/components/SharedPage/OutlineButton/OutlineButton";

const Banner = () => {
  return (
    <div className={style.mainBanner}>
      <div className="container">
        <div className={style.bannerSection}>
          <div className={style.content}>
            <h2 className={style.topContent}>Md. Harun Or Rashid</h2>
            <h1 className={style.introduction}>Hey, I&apos;m Harun</h1>
            <h1 className={style.skills}>
              I&apos;m a{" "}
              <Typewriter
                options={{
                  strings: [
                    "Front-end Developer",
                    "Web Developer",
                    "MERN Stack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className={style.bannerParagraph}>
              <Paragraph
                content={
                  "In an ever-evolving tech landscape, I stay updated with the latest developments and strive to integrate cutting-edge technologies into my projects. I believe in continuous learning and adapting to new methodologies to deliver top-notch solutions."
                }
              />
            </div>
            <SocialLins />
            <div className="mt-5 w-fit">
              <a
                href="https://drive.google.com/file/d/12Z9Q1vT8Lp3DoOIRHhSI9vamvijg5fn9/view?usp=sharing"
                target="_blank"
              >
                <OutlineButton content={"Download Resume"} />
              </a>
            </div>
          </div>
          <div className={style.animation}>
            <Lottie animationData={animationData} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

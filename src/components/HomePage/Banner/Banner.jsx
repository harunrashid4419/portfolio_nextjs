"use client";
import Lottie from "lottie-react";
import style from "./Banner.style.module.css";
import animationData from "../../../../public/amimation.json";
import Typewriter from "typewriter-effect";

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
            <p className={style.content}>
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment.
            </p>
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

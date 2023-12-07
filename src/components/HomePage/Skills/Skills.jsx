"use client";
import React from "react";
import style from "./Skills.style.module.css";
import Heading from "@/components/SharedPage/Heading/Heading";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoLogoJavascript } from "react-icons/io";
import {
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiExpress,
  SiTypescript,
  SiVisualstudio,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { SiDaisyui } from "react-icons/si";
import { DiMongodb, DiNodejs } from "react-icons/di";
import { BiLogoFirebase, BiLogoNetlify } from "react-icons/bi";
import { IoLogoVercel } from "react-icons/io5";

const Skills = () => {
  return (
    <div id="skills" className={style.skills}>
      <div className="container">
        <div className={style.topHeading}>
          <Heading content={"Skills"} />
        </div>
        <div className={style.skill}>
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            centeredSlides={false}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              0: {
                allowSlidePrev: 1,
                spaceBetween: 10,
              },
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              576: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              767: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            className="mySwiper"
            id={style.sliderGap}
          >
            <SwiperSlide>
              <FaReact className={style.sliderIcon} />
            </SwiperSlide>
            <SwiperSlide>
              <IoLogoJavascript className={style.sliderIcon} />
            </SwiperSlide>
            <SwiperSlide>
              <SiExpress className={style.sliderIcon} />
            </SwiperSlide>
            <SwiperSlide>
              <DiNodejs className={style.sliderIcon} />
            </SwiperSlide>
            <SwiperSlide>
              <DiMongodb className={style.sliderIcon} />
            </SwiperSlide>
            <SwiperSlide>
              <TbBrandNextjs className={style.sliderIcon} />
            </SwiperSlide>
            <SwiperSlide>
              <SiTypescript className={style.sliderIcon} />
            </SwiperSlide>
            <SwiperSlide>
              <SiTailwindcss className={style.sliderIcon} />
            </SwiperSlide>
            <SwiperSlide>
              <SiDaisyui className={style.sliderIcon} />
            </SwiperSlide>
            <SwiperSlide>
              <FaBootstrap className={style.sliderIcon} />
            </SwiperSlide>
            <SwiperSlide>
              <FaHtml5 className={style.sliderIcon} />
            </SwiperSlide>
            <SwiperSlide>
              <FaCss3Alt className={style.sliderIcon} />
            </SwiperSlide>
            <SwiperSlide>
              <BiLogoFirebase className={style.sliderIcon} />
            </SwiperSlide>
            <SwiperSlide>
              <FaFigma className={style.sliderIcon} />
            </SwiperSlide>
            <SwiperSlide>
              <BiLogoNetlify className={style.sliderIcon} />
            </SwiperSlide>
            <SwiperSlide>
              <SiVisualstudio className={style.sliderIcon} />
            </SwiperSlide>
            <SwiperSlide>
              <IoLogoVercel className={style.sliderIcon} />
            </SwiperSlide>
            <SwiperSlide>
              <SiAdobephotoshop className={style.sliderIcon} />
            </SwiperSlide>
            <SwiperSlide>
              <SiAdobexd className={style.sliderIcon} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Skills;

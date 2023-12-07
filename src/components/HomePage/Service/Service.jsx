import Heading from "@/components/SharedPage/Heading/Heading";
import style from "./Service.style.module.css";
import ServiceCard from "@/components/SharedPage/ServiceCard/ServiceCard";
import { BsFiletypePsd } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import { DiResponsive } from "react-icons/di";
import { SiCodesignal } from "react-icons/si";
import { FaQrcode } from "react-icons/fa";
import { IoBarcodeOutline } from "react-icons/io5";

const Service = () => {
  return (
    <div id="service" className={style.mainService}>
      <div className="container">
        <div className={style.topHeader}>
          <Heading content={"Service"} />
        </div>
        <div className={style.services}>
          <ServiceCard
            icon={SiCodesignal}
            content={"Front-end Development"}
            paragraph={
              "I can make front-end development the development of a website or application using HTML, CSS, JavaScript, and  React JS."
            }
          />
          <ServiceCard
            icon={FaFigma}
            content={"Figma to React"}
            paragraph={
              "I can convert specific pixels correctly from Figma to React JS. And that too with Responsibe. And it Will be user-friendly."
            }
          />
          <ServiceCard
            icon={BsFiletypePsd}
            content={"PSD to React"}
            paragraph={
              "I can convert specific pixels correctly from PSD to React JS. And that too with Responsibe. And it Will be user-friendly."
            }
          />
          <ServiceCard
            icon={DiResponsive}
            content={"Responsive Design"}
            paragraph={
              "I can do responsive design using flexible grids, layouts, and media queries. So the site can be displayed beautifully on any device."
            }
          />
          <ServiceCard
            icon={FaQrcode}
            content={"Web Development"}
            paragraph={
              "Web development can range from simple static web pages to complex dynamic web applications with interactive features."
            }
          />
          <ServiceCard
            icon={IoBarcodeOutline}
            content={"MERN Stack Development"}
            paragraph={
              "The MERN stack is a powerful and popular technology stack that leverages JavaScript throughout the entire development process."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Service;

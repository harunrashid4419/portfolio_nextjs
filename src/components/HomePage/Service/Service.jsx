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
    <div className={style.mainService}>
      <div className="container">
        <div className={style.topHeader}>
          <Heading content={"Service"} />
        </div>
        <div className={style.services}>
          <ServiceCard
            icon={SiCodesignal}
            content={"Front-end Development"}
            paragraph={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ipsam voluptatibus libero repellendus omnis nesciunt esse cum voluptate sit ratione?"
            }
          />
          <ServiceCard
            icon={FaFigma}
            content={"Figma to React"}
            paragraph={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ipsam voluptatibus libero repellendus omnis nesciunt esse cum voluptate sit ratione?"
            }
          />
          <ServiceCard
            icon={BsFiletypePsd}
            content={"PSD to React"}
            paragraph={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ipsam voluptatibus libero repellendus omnis nesciunt esse cum voluptate sit ratione?"
            }
          />
          <ServiceCard
            icon={DiResponsive}
            content={"Responsive Design"}
            paragraph={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ipsam voluptatibus libero repellendus omnis nesciunt esse cum voluptate sit ratione?"
            }
          />
          <ServiceCard
            icon={FaQrcode }
            content={"Web Development"}
            paragraph={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ipsam voluptatibus libero repellendus omnis nesciunt esse cum voluptate sit ratione?"
            }
          />
          <ServiceCard
            icon={IoBarcodeOutline}
            content={"MERN Stack Development"}
            paragraph={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ipsam voluptatibus libero repellendus omnis nesciunt esse cum voluptate sit ratione?"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Service;

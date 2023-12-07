"use client";
import Heading from "@/components/SharedPage/Heading/Heading";
import style from "../../HomePage/Projects/Projects.style.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "@/components/SharedPage/Button/Button";
import Link from "next/link";
import Loader from "@/components/SharedPage/Loader/Loader";
import SmallBtn from "@/components/SharedPage/SmallBtn/SmallBtn";

const AllProjects = () => {
  const [datas, setdatas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://personal-portfolio-server-kappa.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => {
        setdatas(data);
        setLoading(false);
      });
  }, []);

  const handleClick = () => {
    
  }

  return (
    <div className={style.projectsSection}>
      <div className="container">
        <div className={style.projects}>
          <div className={style.topHeading}>
            <Heading content={"All Projects"} />
          </div>
          {loading ? (
            <Loader />
          ) : (
            <div className={style.allProjects}>
                {datas.map((e) => (
                  <div className={style.project} key={e?.id}>
                    <Image
                      className={style.img}
                      src={e?.img}
                      alt="project img"
                      width={100}
                      height={100}
                      layout="responsive"
                    />
                    <div className={style.content}>
                      <h3>{e?.category}</h3>
                      <h2>{e?.name}</h2>
                      <div className={style.description_wrap}>
                        <span>{e?.description.slice(0, 100)}...</span>
                        <button
                          onClick={handleClick}
                          className={style.contentBtn}
                        >
                          Read More
                        </button>
                      </div>
                      <div className={style.btn}>
                        {e?.link && (
                          <a href={e?.link} target="_black">
                            <SmallBtn content={"Live Link"} />
                          </a>
                        )}
                        {e?.client_code && (
                          <a href={e?.client_code} target="_black">
                            <SmallBtn content={"Client Code"} />
                          </a>
                        )}
                        {e?.server_code && (
                          <a href={e?.server_code} target="_black">
                            <SmallBtn content={"Server Code"} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;

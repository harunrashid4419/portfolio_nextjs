"use client";
import Heading from "@/components/SharedPage/Heading/Heading";
import style from "./Projects.style.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "@/components/SharedPage/Button/Button";
import Link from "next/link";

const Projects = () => {
  const [datas, setdatas] = useState([]);

  useEffect(() => {
    fetch("https://personal-portfolio-server-kappa.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => {
        setdatas(data.slice(0, 3));
      });
  }, []);

  return (
    <div className={style.projectsSection}>
      <div className="container">
        <div className={style.projects}>
          <div className={style.topHeading}>
            <Heading content={"Projects"} />
          </div>
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
                  <h3>React JS JavaScript</h3>
                  <h2>{e?.name}</h2>
                  <p>{e?.description.slice(0, 100)}...</p>
                  <div className={style.btn}>
                    <Link href={`/project/${e?.id}`}>
                      <Button content={"Details"} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={style.topHeading}>
            <Button content={"See More"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

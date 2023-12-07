"use client";
import Link from "next/link";
import style from "./Navbar.style.module.css";
import { CiMenuFries } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);

  return (
    <div className={style.mainNavbar}>
      <div className="container">
        <div className={style.navbarSection}>
          <div className={style.left}>
            <Link href="/">Harun</Link>
          </div>
          <div className={style.right}>
            <ul
              className={`md:static absolute duration-500 ease-in-out ${
                click ? "top-[100px] right-0" : "top-[-350px] right-0"
              }`}
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <a href="#service">Service</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <div onClick={() => setClick(!click)}>
              {click ? (
                <GrClose className={style.menuIcon} />
              ) : (
                <CiMenuFries className={style.menuIcon} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

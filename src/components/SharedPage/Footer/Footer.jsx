import Link from "next/link";
import style from "./Footer.style.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail, MdLocationOn } from "react-icons/md";
import Paragraph from "../Paragraph/Paragraph";
import SocialLins from "../SocialLinks/SocialLins";
import ContactInfo from "../ContactInfo/ContactInfo";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className={style.mainFooter}>
        <div className="container">
          <div className={style.footerSection}>
            <div>
              <Link className={style.link} href="/">
                Harun
              </Link>
              <div className={style.paragraph}>
                <Paragraph
                  content={
                    "We work with a passion of taking challenges and creating new ones in advertising sector."
                  }
                />
              </div>
              <SocialLins />
            </div>
            <div className={style.middleContect}>
              <h2 className={style.footerHeading}>Links</h2>
              <div className={style.menuMain}>
                <Link className={style.footerLink} href="/">
                  Home
                </Link>
                <Link className={style.footerLink} href="/">
                  About
                </Link>
                <Link className={style.footerLink} href="/">
                  Skills
                </Link>
                <Link className={style.footerLink} href="/">
                  Projects
                </Link>
                <Link className={style.footerLink} href="/">
                  Service
                </Link>
                <Link className={style.footerLink} href="/">
                  Contact
                </Link>
              </div>
            </div>
            <div className={style.rightContect}>
              <h2 className={style.footerHeading}>Contact info</h2>
              <div className={style.owninfo}>
                <ContactInfo
                  icon={FaPhoneAlt}
                  content={"Phone"}
                  info={"+8801775914419"}
                />
                <ContactInfo
                  icon={MdEmail}
                  content={"Email"}
                  info={"harunrashid4419@gmail.com"}
                />
                <ContactInfo
                  icon={MdLocationOn}
                  content={"Address"}
                  info={"Natore, Rajshahi"}
                />
              </div>
              <div className={style.newsletter}>
                <h2 className={style.footerHeading}>Subscribe Newsletter</h2>
                <div className={style.newsletterWrap}>
                  <input type="email" name="" id="" placeholder="Your mail" />
                  <button className={style.subscribeBtn}>Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.copyRight}>
          <Paragraph
            content={`Copyright © ${year} - All Rights Reserved. Made by Fallow`}
          />
        </div>
      </div>
    </>
  );
};

export default Footer;

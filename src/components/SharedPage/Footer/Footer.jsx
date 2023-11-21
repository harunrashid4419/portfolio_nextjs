import Link from "next/link";
import style from "./Footer.style.module.css";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className={style.mainFooter}>
      <div className="container">
        <div className={style.footerSection}>
          <div>
            <Link className={style.link} href="/">
              Harun
            </Link>
            <p className={style.paragraph}>
              We work with a passion of taking challenges and creating new ones
              in advertising sector.
            </p>
            <div className={style.mainLinks}>
              <FaFacebookF className={style.icon} />
              <FaLinkedinIn className={style.icon} />
              <FaGithub className={style.icon} />
            </div>
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
            <div className={style.contactInfo}>
              <div className={style.mainInfo}>
                <IoLocationSharp className={style.infoIcon} />
                <span className={style.contact}>Baraigram, Natore</span>
              </div>
              <div className={style.mainInfo}>
                <FaPhoneAlt className={style.infoIcon} />
                <span className={style.contact}>+8801775914419</span>
              </div>
              <div className={style.mainInfo}>
                <MdEmail className={style.infoIcon} />
                <span className={style.contact}>harunrashid4419@gmail.com</span>
              </div>
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
    </div>
  );
};

export default Footer;

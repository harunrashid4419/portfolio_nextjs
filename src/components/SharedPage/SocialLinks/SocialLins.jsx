import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import style from "./SocialLinks.style.module.css";

const SocialLins = () => {
  return (
    <div className={style.mainLinks}>
      <a href="https://www.facebook.com/harunrashid.me" target="_blank">
        <FaFacebookF className={style.icon} />
      </a>
      <a
        href="https://www.linkedin.com/in/md-harun-or-rashid2/"
        target="_blank"
      >
        <FaLinkedinIn className={style.icon} />
      </a>
      <a href="https://github.com/harunrashid4419" target="_blank">
        <FaGithub className={style.icon} />
      </a>
    </div>
  );
};

export default SocialLins;

import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import style from "./SocialLinks.style.module.css";

const SocialLins = () => {
  return (
    <div className={style.mainLinks}>
      <FaFacebookF className={style.icon} />
      <FaLinkedinIn className={style.icon} />
      <FaGithub className={style.icon} />
    </div>
  );
};

export default SocialLins;

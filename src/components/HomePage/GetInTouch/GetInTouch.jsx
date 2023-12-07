import style from "./GetInTouch.style.module.css";
import Heading from "@/components/SharedPage/Heading/Heading";
import Button from "@/components/SharedPage/Button/Button";

const GetInTouch = () => {
  return (
    <div id="contact" className={style.getInTouch}>
      <div className="container">
        <div className={style.touchSection}>
          <Heading content={"Let's Get In Touch"} />
          <form
            action="https://formsubmit.co/harunrashid4419@gmail.com"
            method="POST"
            className={style.form}
          >
            <div className={style.nameEmail}>
              <input
                className={style.inputFiled}
                type="text"
                name="name"
                id=""
                placeholder="Your Name"
              />
              <input
                className={style.inputFiled}
                type="email"
                name="email"
                id=""
                placeholder="Your Email"
              />
            </div>
            <textarea
              className={style.messageBox}
              name="message"
              id=""
              placeholder="Your Message"
            />
            <div className={style.btn}>
              <Button content={"Send Message"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;

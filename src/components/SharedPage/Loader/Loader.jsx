import style from "./Loader.style.module.css";
const Loader = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", paddingTop: '30px' }}>
      <div class={style.ldsRipple}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;

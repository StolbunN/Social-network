import style from "./Hashtag.module.css";

const Hashtag = (props) => {
  return (
    <a href="#" className={style.hashtag}>{props.value}</a>
  );
};

export default Hashtag;
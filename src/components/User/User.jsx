import style from "./User.module.css";

const User = (props) => {
    return (
      <article className={style.user}>
        <div className={style.img}>Картинка</div>
        <h3 className={style.name}>{props.name}</h3>
        <p className={style.description}>
          {props.description}
        </p>
      </article>
    );
};

export default User;
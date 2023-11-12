import style from "./Category.module.css";

const Category = (props) => {
    return(
        <article className={style.category}>
          <h3 className={style.title}>{props.title}</h3>
          <div className={style.imgWrapper}>
            Картинка
          </div>
        </article>
    );
};

export default Category;
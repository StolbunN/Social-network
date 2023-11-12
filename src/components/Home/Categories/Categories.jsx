import style from "./Categories.module.css";
import Category from "./Category/Category";

const Categories = () => {
    return(
        <section className={style.categories}>
          <h2 className="title">Категории</h2>
          <div className={style.body}>
            <Category title="Музыканты"/>
            <Category title="Актеры"/>
            <Category title="YouTubers"/>
            <Category title="Блогеры"/>
            <Category title="Комики"/>
            <Category title="Модели"/>
          </div>
        </section>
    );
};

export default Categories;
import style from "./Recommendations.module.css";
import User from "../../User/User";

const Recommendations = () => {
    return(
        <section className={style.recommendations}>
          <h2 className="title">Рекомендуем</h2>
          <div className={style.body}>
            <div className={style.active}>
              <User name="Фамилия Имя" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, maxime nesciunt quod doloremque corrupti magnam quisquam veniam omnis."/>
            </div>
            <div className={style.column}>
            <User name="Фамилия Имя" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."/>
            </div>
            <div className={style.column}>
            <User name="Фамилия Имя" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."/>
            </div>
            <div className={style.column}>
              <User name="Фамилия Имя" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, maxime nesciunt quod doloremque corrupti magnam quisquam veniam omnis."/>
            </div>
            <div className={style.column}>
            <User name="Фамилия Имя" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."/>
            </div>
            <div className={style.column}>
            <User name="Фамилия Имя" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."/>
            </div>
          </div>
        </section>
    );
};

export default Recommendations;
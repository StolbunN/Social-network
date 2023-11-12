import Categories from "./Categories/Categories";
import style from "./Home.module.css";
import Recommendations from "./Recommendations/Recommendations";

const Home = () => {
    return (
      <section className={style.homePage}>
        <Categories/>
        <Recommendations/>
      </section>
    );
};

export default Home;
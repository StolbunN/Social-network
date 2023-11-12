import style from "./Header.module.css";
import ProfileLink from "./ProfileLink/ProfileLink";
import Search from "./Search/Search"

const Header = () => {
    return (
      <header className={style.header}>
        <div className={style.logo}>
          <a href="#">
            <img src="https://upload.wikimedia.org/wikipedia/ru/2/26/Spain_National_Football_Team_Badge.png"/>
          </a>
        </div>
        <Search />
        <ProfileLink username="Столбов Никита"/>
      </header>
    );
};

export default Header;
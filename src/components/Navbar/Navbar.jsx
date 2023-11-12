import style from "./Navbar.module.css";

const Navbar = () => {
    return (
      <nav className={style.nav}>
        <ul className={style.menu}>
          <li className={style.item}>
            <a href="#" className={style.link}>
              Главная
            </a>
          </li>
          <li className={style.item}>
            <a href="#" className={style.link}>
              Сообщения
            </a>
          </li>
          <li className={style.item}>
            <a href="#" className={style.link}>
              Настройки
            </a>
          </li>
        </ul>
      </nav>
    );
};

export default Navbar;
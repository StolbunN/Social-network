import style from "./Search.module.css";
import Hashtag from "../../Hashtag/Hashtag";

const Search = () => {
    return (
        <div className={style.search}>
          <form action="#" className={style.searchForm}>
            <input type="search" name="searchInput" className={style.searchInput} placeholder="Поиск"/>
          </form>
          <div>
            <Hashtag value="#Twiddi"/>
            <Hashtag value="#Twiddi"/>
            <Hashtag value="#Twiddi"/>
            <Hashtag value="#Twiddi"/>
            <Hashtag value="#Twiddi"/>
            <Hashtag value="#Twiddi"/>
          </div>
        </div>
    );
}

export default Search;
import style from "./ProfileLink.module.css";
import AvatarIcon from "../../AvatarIcon/AvatarIcon";

const ProfileLink = (props) => {
    return (
        <div className={style.body}>
            <AvatarIcon/>
            <span className={style.name}>{props.username}</span>
            <span className={style.border}></span>
            <span className={style.exit}>Выход</span>
        </div>
    );
}

export default ProfileLink;
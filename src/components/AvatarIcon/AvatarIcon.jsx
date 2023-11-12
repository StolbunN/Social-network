import style from "./AvatarIcon.module.css";

const AvatarIcon = (props) => {
    return (
        <div className={style.body}>
            <div className={style.online}></div>
            <div className={style.image}>
                фото
            </div>
        </div>
    );
}

export default AvatarIcon;
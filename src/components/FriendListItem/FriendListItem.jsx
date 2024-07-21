import clsx from "clsx";
import css from './FriendListItem.module.css'
const FriendCard = ({ avatar, nameFriend, isOnline }) => {
  return (
    <div className={css.divItem}>
      <img src={avatar} alt="Avatar" width="48" className={css.icon} />
      <p className={css.name}>{nameFriend}</p>
      <p className={clsx(isOnline === true ? css.isOnline : css.offline)}>
      {clsx(isOnline === true ? "Online" : "Offline")}
      </p>
    </div>
  );
};
export default FriendCard
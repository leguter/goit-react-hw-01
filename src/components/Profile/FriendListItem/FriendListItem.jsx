import clsx from "clsx";
const FriendCard = ({ avatar, nameFriend, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{nameFriend}</p>
      <p className={clsx(isOnline === true ? "isOnline" : "offline")}>
        Friend status: {clsx(isOnline === true ? "Online" : "Offline")}
      </p>
    </div>
  );
};
export default FriendCard
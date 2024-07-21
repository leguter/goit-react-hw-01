import FriendCard from "../FriendListItem/FriendListItem";
const FriendList = ({
  friend: { avatar, name, isOnline }
}) => {
    return (
      <ul>
        {/* Кількість li залежить від кількості об'єктів в масиві */}
        <li>
          <FriendCard avatar={avatar} nameFriend={name} isOnline={isOnline}/>
        </li>
      </ul>
    );
}
export default FriendList
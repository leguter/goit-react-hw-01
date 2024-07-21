import FriendCard from "../FriendListItem/FriendListItem";
import cssFriendList from './FriendList.module.css'
const FriendList = ({
  friends,
}) => {
    return (
      <ul className={cssFriendList.list}>
        
        <li className={cssFriendList.listItem}>
          {friends.map(friend => <FriendCard avatar={friend.avatar} nameFriend={friend.name} isOnline={friend.isOnline} />)}
        </li>
      </ul>
    );
}
export default FriendList
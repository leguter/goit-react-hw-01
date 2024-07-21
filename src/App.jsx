import './App.css'
import Profile from './components/Profile/Profile/Profile';
import userData from "./userData.json";
import FriendList from './components/Profile/FriendList/FriendList';
import friends from './friends.json'

const App = () => {
  return (
    <>
      <Profile
        nameEl={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friend={friends} />
    </>
  );
};

export default App

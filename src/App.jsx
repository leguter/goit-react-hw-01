import './App.css'
import Profile from './components/Profile/Profile';
import userData from "./userData.json";
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
    </>
  );
};

export default App

// import { useState } from "react";
// import { HiUser } from "react-icons/hi";

import "./App.css";
import { Profile } from "./Profile/Profile";
import userData from "../userData.json";
import friends from "../friends.json";
import { FriendList } from "./Friends/FriendList/FriendList";

function App() {
  return (
    <>
      <h2>Task - 1</h2>
      <Profile {...userData} />
      <h2>Task - 2</h2>
      <FriendList friends={friends} />
    </>
  );
}

export default App;

// import { useState } from "react";
// import data
import userData from "./data/userData.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

import "./App.css";
// import components
import { Profile } from "./Profile/Profile";
import { FriendList } from "./Friends/FriendList/FriendList";
import { TransactionHistory } from "./Transactions/TransactionHistory/TransactionHistory";

function App() {
  return (
    <>
      <h2>Завдання 1 - Профіль соціальної мережі</h2>
      <Profile {...userData} />
      <h2>Завдання 2 - Список друзів</h2>
      <FriendList friends={friends} />
      <h2>Завдання 3 - Історія транзакцій</h2>
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;

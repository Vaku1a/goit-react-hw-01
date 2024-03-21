import { FriendListItem } from "../FriendListItem/FriendListItem";
import { FriendListStyle } from "./FriendList-styled";

export const FriendList = ({ friends }) => (
  <FriendListStyle>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </FriendListStyle>
);

// export const FriendList = ({ friends }) => (
//   <FriendListStyle>
//     {friends.map(({ id, avatar, name, isOnline }) => (
//       <FriendListItem
//         key={id}
//         avatar={avatar}
//         name={name}
//         isOnline={isOnline}
//       />
//     ))}
//   </FriendListStyle>
// );

// export const FriendList = ({ friends }) => {
//   console.log("friends", friends);
//   return (
//     <ul>
//       <FriendListItem></FriendListItem>
//     </ul>
//   );
// };

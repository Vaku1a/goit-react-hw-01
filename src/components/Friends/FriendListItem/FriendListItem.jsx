import {
  FriendAvatar,
  FriendItem,
  FriendName,
  FriendStatus,
} from "./FriendListItem-styled";

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendItem key={id}>
      <FriendAvatar src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
      <FriendStatus $status={isOnline}>
        {isOnline ? "Online" : "Offline"}
      </FriendStatus>
    </FriendItem>
  );
};

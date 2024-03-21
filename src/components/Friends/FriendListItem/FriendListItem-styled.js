import styled from "styled-components";

export const FriendItem = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  outline: 2px solid black;
  border-radius: 2%;
  padding: 10px;
`;

export const FriendAvatar = styled.img`
  width: 150px;
  height: 100%:
 
`;

export const FriendName = styled.p`
  font-size: 24px;
  font-weight: normal;
  color: grey;
  text-align: center;
`;

export const FriendStatus = styled.p`
  color: ${({ $status }) => ($status ? "green" : "red")};
`;

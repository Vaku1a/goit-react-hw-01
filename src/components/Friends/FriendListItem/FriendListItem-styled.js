import styled from "styled-components";

export const FriendItem = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  border: 1px solid #ddd;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5%;
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
  padding: 8px;
`;

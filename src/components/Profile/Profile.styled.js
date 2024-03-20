import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
  outline: 2px solid black;
  border-radius: 2%;
  background-color: #f4f2f3;
  width: 300px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0 20px 0;
`;

export const Avatar = styled.img`
  margin-top: 10px;
  outline: 2px solid black;
  border-radius: 50%;
  background-color: grey;
  width: 150px;
  height: 100%;
`;

export const UserName = styled.p`
  font-size: 34px;
  font-weight: bold;
  color: black;
`;

export const Tag = styled.p`
  font-size: 24px;
  font-weight: normal;
  color: grey;
  text-align: center;
`;
export const Location = styled.p`
  font-size: 24px;
  font-weight: normal;
  color: grey;
  text-align: center;
`;

export const ListStat = styled.ul`
  display: flex;
  list-style-type: none;
`;

export const ItemStat = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 3);
  padding: 10px;
  text-align: center;
  border: 1px solid black;
  background-color: grey;
`;

export const NameItem = styled.span`
  font-weight: normal;
`;

export const SpanItem = styled.span`
  font-weight: bold;
`;

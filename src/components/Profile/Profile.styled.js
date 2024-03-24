import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  margin: 50px auto;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  background-color: #f4f2f3;
  width: 300px;
  overflow: hidden;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 100%;
  padding: 24px 0 20px 0;
  border-bottom: 1px solid #ddd;
`;

export const Avatar = styled.img`
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 50%;
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
  padding: 0;
  width: 100%;
`;

export const ItemStat = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 3);
  padding: 10px;
  background: light-grey;
  text-align: center;
  border-right: 1px solid #ddd;
  &:last-child {
    border-right: none;
  }
`;

export const NameItem = styled.span`
  font-weight: normal;
  padding: 8px;
`;

export const SpanItem = styled.span`
  font-weight: bold;
`;

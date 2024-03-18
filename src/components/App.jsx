// import { useState } from "react";
// import { HiUser } from "react-icons/hi";
import styled from "styled-components";
import "./App.css";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

function App() {
  return (
    <>
      <Wrapper>
        <Title>Hello React Home Work - 1!</Title>
      </Wrapper>
    </>
  );
}

export default App;

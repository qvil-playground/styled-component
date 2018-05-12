import React, { Component } from "react";
// import "./App.css";
import styled, { injectGlobal } from "styled-components";

injectGlobal`
  body {
    padding: 0;
    margin: 0;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${props => (props.danger ? "#c0392b" : "#2ecc71")};
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Button>Button</Button>
        <Button danger>Button</Button>
      </Container>
    );
  }
}

export default App;

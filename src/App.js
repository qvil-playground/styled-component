import React, { Component, Fragment } from "react";
// import "./App.css";
import styled from "styled-components";

// const Button = ({ danger, text }) => {
//   return (
//     <button
//       className={danger ? "button button--danger" : "button button--success"}
//     >
//       {text || "Button"}
//     </button>
//   );
// };

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
  background-color: ${props => props.danger ? "#c0392b" : "#2ecc71"};
`;

class App extends Component {
  render() {
    return (
      <Fragment>
        <Button>Button</Button>
        <Button danger>Button</Button>
      </Fragment>
    );
  }
}

export default App;

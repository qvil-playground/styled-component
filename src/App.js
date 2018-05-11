import React, { Component, Fragment } from "react";
import "./App.css";

const Button = ({ danger, text }) => {
  return (
    <button
      className={danger ? "button button--danger" : "button button--success"}
    >
      {text || "Button"}
    </button>
  );
};

class App extends Component {
  render() {
    return (
      <Fragment>
        <Button />
        <Button danger text={"Danger"} />
      </Fragment>
    );
  }
}

export default App;

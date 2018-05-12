import React, { Component } from "react";
import styled, { injectGlobal, ThemeProvider } from "styled-components";
import { awesomeCard } from "styles/mixin";
import theme from "styles/theme";

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
  ${awesomeCard};
`;

const Card = styled.div`
  background-color: white;
`;

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  outline: none;
  background-color: ${props => props.theme.color[props.color]};
`;

const Form = () => (
  <Card>
    <Button color="primary">Hello</Button>
    <Button color="secondary">Hello</Button>
    <Button color="danger">Hello</Button>
  </Card>
);

// const Input = styled.input.attrs({
//   required: true
// })`
//   border: none;
//   outline: none;
//   ${awesomeCard};
// `;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Form />
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;

import React, { Component } from "react";
import { questions } from "../assets/kat_b_pl";
import Question from "./Question";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  max-width: 900px;
  margin: auto;
`;

class App extends Component {
  state = {
    questions: [...questions], //this is wrong method to get data - fix it later !!!
    currentCategory: "b"
  };

  render() {
    const { questions } = this.state;

    return (
      <Wrapper>
        {questions.slice(3, 6).map(question => {
          return <Question key={question.id} question={question} />;
        })}
      </Wrapper>
    );
  }
}

export default App;

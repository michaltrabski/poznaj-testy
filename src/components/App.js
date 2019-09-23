import React, { Component } from "react";
import { questionsList } from "../assets/kat_b_pl";
import Questions from "./Questions";
import styled, { css } from "styled-components";
import Sidebar from "./Sidebar";

const Background = styled.div`
  background-color: ${props => props.theme.light};
`;

const Wrapper = styled.div`
  max-width: 1180px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

class App extends Component {
  state = {
    questionsList: [...questionsList], //this is wrong method to get data - fix it later !!!
    userSettings: {
      currentCategory: "b",
      startingQuestion: 14,
      questionPerPage: 3
    }
  };

  render() {
    const { questionsList } = this.state;
    const { startingQuestion, questionPerPage } = this.state.userSettings;

    return (
      <Background>
        <Wrapper>
          <Questions
            questionsList={questionsList}
            questionPerPage={questionPerPage}
            startingQuestion={startingQuestion}
          />
          <Sidebar />
        </Wrapper>
      </Background>
    );
  }
}

export default App;

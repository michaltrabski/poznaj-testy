import React, { Component } from "react";
import { questionsList } from "../assets/kat_b_pl";
import Questions from "./Questions";
import styled, { css } from "styled-components";
import Sidebar from "./Sidebar";

const Wrapper = styled.div`
  max-width: 900px;
  margin: auto;
`;

class App extends Component {
  state = {
    questionsList: [...questionsList], //this is wrong method to get data - fix it later !!!
    currentCategory: "b",
    questionPerPage: 4,
    startingQuestion: 0
  };

  render() {
    const { questionsList } = this.state;

    return (
      <Wrapper>
        <Questions questionsList={questionsList} />
        <Sidebar />
      </Wrapper>
    );
  }
}

export default App;

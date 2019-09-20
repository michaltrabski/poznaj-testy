import React, { Component } from "react";
import { questions } from "../assets/kat_b_pl";
import Question from "./Question";

class App extends Component {
  state = {
    questions: [...questions], //this is wrong method to get data - fix it later !!!
    currentCategory: "b"
  };
  render() {
    return (
      <>
        <Question question={this.state.questions[0]} />
        <Question question={this.state.questions[1]} />
      </>
    );
  }
}

export default App;

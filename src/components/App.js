import React, { Component } from "react";
import { questions } from "../assets/kat_b_pl";
import Question from "./Question";

class App extends Component {
  state = {
    questions: [...questions], //this is wrong method to get data - fix it later !!!
    currentCategory: "b"
  };

  render() {
    const { questions } = this.state;

    return (
      <>
        {questions.slice(0, 3).map(question => {
          return <Question key={question.id} question={question} />;
        })}
      </>
    );
  }
}

export default App;

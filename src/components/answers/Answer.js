import React, { Component } from "react";
import AnswerYesNo from "./AnswerYesNo";
import AnswerAbc from "./AnswerAbc";

class Answer extends Component {
  render() {
    let { r } = this.props.question;
    r = r.toLowerCase();

    return r !== "t" && r !== "n" ? (
      <AnswerAbc {...this.props} />
    ) : (
      <AnswerYesNo {...this.props} />
    );
  }
}

export default Answer;

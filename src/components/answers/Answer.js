import React, { Component } from "react";
import AnswerYesNo from "./AnswerYesNo";
import AnswerAbc from "./AnswerAbc";

class Answer extends Component {
  state = {
    showRightAnswerNow: true
  };

  render() {
    const { showRightAnswerNow } = this.state;
    let { r } = this.props.question;
    r = r.toLowerCase();

    return r !== "t" && r !== "n" ? (
      <AnswerAbc {...this.props} showRightAnswerNow={showRightAnswerNow} />
    ) : (
      <AnswerYesNo {...this.props} showRightAnswerNow={showRightAnswerNow} />
    );
  }
}

export default Answer;

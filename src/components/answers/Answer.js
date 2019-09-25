import React, { Component } from "react";
import AnswerYesNo from "./AnswerYesNo";
import AnswerAbc from "./AnswerAbc";

class Answer extends Component {
  state = {
    shownAnswerAfterClick: false
  };

  handleShowAnswerAfterClick = (id, answer) => {
    this.setState({ shownAnswerAfterClick: true });
    console.log(id, answer);
  };
  render() {
    let { r } = this.props.question;
    r = r.toLowerCase();
    if (r !== "t" && r !== "n") {
      return (
        <AnswerAbc
          {...this.props}
          handleShowAnswerAfterClick={this.handleShowAnswerAfterClick}
          shownAnswerAfterClick={this.state.shownAnswerAfterClick}
        />
      );
    } else {
      return <AnswerYesNo {...this.props} />;
    }
  }
}

export default Answer;

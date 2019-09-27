import React, { Component } from "react";
import AnswerYesNo from "./AnswerYesNo";
import AnswerAbc from "./AnswerAbc";
import MichalContext from "./../../context/MichalContext";
import { AppContext } from "./../App";

class Answer extends Component {
  static contextType = MichalContext;

  render() {
    const { showRightAnswerNow } = this.context;
    let { r } = this.props.question;
    r = r.toLowerCase();

    return (
      <AppContext.Consumer>
        {AppContext => (
          <>
            read AppContext: {AppContext.accesByAppContext}
            {r !== "t" && r !== "n" ? (
              <AnswerAbc
                {...this.props}
                showRightAnswerNow={showRightAnswerNow}
              />
            ) : (
              <AnswerYesNo
                {...this.props}
                showRightAnswerNow={showRightAnswerNow}
              />
            )}
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Answer;

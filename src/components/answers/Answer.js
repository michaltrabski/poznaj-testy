import React from "react";
import AnswerYesNo from "./AnswerYesNo";
import AnswerAbc from "./AnswerAbc";

const Answer = props => {
  let { r } = props.question;
  r = r.toLowerCase();

  if (r !== "t" && r !== "n") {
    return <AnswerAbc {...props} />;
  } else {
    return <AnswerYesNo {...props} />;
  }
};

export default Answer;

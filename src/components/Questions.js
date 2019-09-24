import React from "react";
import Question from "./Question";

const Questions = ({ questionsList, startingQuestion, questionPerPage }) => {
  const sliceTo = startingQuestion + questionPerPage;

  return (
    <>
      {questionsList.slice(startingQuestion, sliceTo).map(question => {
        return <Question key={question.id} question={question} />;
      })}
    </>
  );
};

export default Questions;

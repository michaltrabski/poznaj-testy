import React from "react";
import Question from "./Question";
import { Button } from "react-bootstrap/";

const Questions = ({
  questionsList,
  startingQuestion,
  questionPerPage,
  nextQuestion,
  previesQuestion,
  removeQuestion,
  showRightAnswerNow
}) => {
  const sliceTo = startingQuestion + questionPerPage;

  return (
    <>
      {questionsList.slice(startingQuestion, sliceTo).map((question, i) => {
        return (
          <Question
            showRightAnswerNow={showRightAnswerNow}
            i={i + 1}
            key={question.id}
            question={question}
            questionPerPage={questionPerPage}
            removeQuestion={removeQuestion}
          />
        );
      })}
      <div className="p-5 d-flex justify-content-between">
        <Button
          variant="primary"
          onClick={previesQuestion}
          disabled={startingQuestion <= 0 && true}
        >
          Poprzednie
        </Button>
        <Button variant="primary" onClick={nextQuestion}>
          Następne
        </Button>
      </div>
    </>
  );
};

export default Questions;

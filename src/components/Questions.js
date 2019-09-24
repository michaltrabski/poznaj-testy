import React from "react";
import Question from "./Question";
import { Button } from "react-bootstrap/";

const Questions = ({
  questionsList,
  startingQuestion,
  questionPerPage,
  previesQuestion,
  nextQuestion
}) => {
  const sliceTo = startingQuestion + questionPerPage;

  return (
    <>
      {questionsList.slice(startingQuestion, sliceTo).map(question => {
        return (
          <Question
            key={question.id}
            question={question}
            questionPerPage={questionPerPage}
          />
        );
      })}
      <div className="d-flex justify-content-between">
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

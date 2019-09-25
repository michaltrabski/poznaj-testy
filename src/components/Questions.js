import React from "react";
import Question from "./Question";
import { Button } from "react-bootstrap/";

const Questions = ({
  questionsList,
  startingQuestion,
  questionPerPage,
  nextQuestion,
  previesQuestion,
  removeQuestion
}) => {
  const sliceTo = startingQuestion + questionPerPage;

  return (
    <>
      {questionsList.slice(startingQuestion, sliceTo).map((question, i) => {
        return (
          <Question
            i={i + 1}
            key={question.id}
            question={question}
            questionPerPage={questionPerPage}
            removeQuestion={removeQuestion}
          />
        );
      })}
      <div className="py-5 d-flex justify-content-between">
        <Button
          variant="primary"
          onClick={previesQuestion}
          disabled={startingQuestion <= 0 && true}
        >
          {questionPerPage === 1 ? "poprzednie pytanie" : "Poprzednia strona"}
        </Button>
        <Button variant="primary" onClick={nextQuestion}>
          {questionPerPage === 1 ? "Następne pytanie" : "Następna strona"}
        </Button>
      </div>
    </>
  );
};

export default Questions;

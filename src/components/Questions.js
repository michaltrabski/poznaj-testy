import React from "react";
import Question from "./Question";
import { Row, Col, Form, Button } from "react-bootstrap/";

const Questions = ({
  questionsList,
  startingQuestion,
  questionPerPage,
  nextQuestion,
  previesQuestion,
  removeQuestion,
  hideQuestion
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
            hideQuestion={hideQuestion}
          />
        );
      })}

      <Row
        className="rounded mb-5 py-3"
        style={{
          border: "1px solid #ced4da",
          backgroundColor: "#dee2e6"
        }}
      >
        <Col xs={12}>
          <div className="d-flex justify-content-between">
            <Button
              variant="primary"
              onClick={previesQuestion}
              disabled={startingQuestion <= 0 && true}
            >
              {questionPerPage === 1
                ? "poprzednie pytanie"
                : "Poprzednia strona"}
            </Button>

            {/* <Button variant="secondary">Rozwiń więcej pytań...</Button> */}

            <Button variant="primary" onClick={nextQuestion}>
              {questionPerPage === 1 ? "Następne pytanie" : "Następna strona"}
            </Button>
          </div>
        </Col>
        <Col xs={12}>
          <div>
            <label htmlFor="nr">Przejdź do pytania nr: </label>
            <input
              className="form-control d-inline"
              style={{ width: "auto" }}
              id="nr"
              type="number"
              value="100"
            />
            <Button variant="primary">Idź</Button>
          </div>
        </Col>
      </Row>
      <Row
        className="rounded mb-5 py-3"
        style={{
          border: "1px solid #ced4da",
          backgroundColor: "#dee2e6"
        }}
      >
        <Col>
          <div>
            <label htmlFor="nr">Przejdź do pytania nr: </label>
            <input
              className="form-control d-inline"
              style={{ width: "auto" }}
              id="nr"
              type="number"
              value="100"
            />
            <Button variant="primary">Idź</Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Questions;

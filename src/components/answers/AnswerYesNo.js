import React from "react";
import { Row, Col, Button } from "react-bootstrap/";

const AnswerYesNo = props => {
  let { showRightAnswerNow, userClickedAnswer } = props;
  let { r, id } = props.question;

  return (
    <Row>
      <Col>
        <div className="p-3 d-flex justify-content-center">
          <Button
            variant={
              r.toLowerCase() === "t" && showRightAnswerNow
                ? "success"
                : "light"
            }
            onClick={() => userClickedAnswer(id, "t")}
          >
            Tak
          </Button>
          <Button
            variant={
              r.toLowerCase() === "n" && showRightAnswerNow
                ? "success"
                : "light"
            }
            onClick={() => userClickedAnswer(id, "n")}
            className="ml-3"
          >
            Nie
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default AnswerYesNo;

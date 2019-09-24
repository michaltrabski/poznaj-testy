import React from "react";
import { Row, Col, Button } from "react-bootstrap/";

const AnswerYesNo = props => {
  let { showRightAnswerNow } = props;
  let { r } = props.question;

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
          >
            Tak
          </Button>
          <Button
            variant={
              r.toLowerCase() === "n" && showRightAnswerNow
                ? "success"
                : "light"
            }
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

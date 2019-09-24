import React from "react";
import { Row, Col, Button } from "react-bootstrap/";

const AnswerAbc = props => {
  let { showRightAnswerNow } = props;
  let { a, b, c, r } = props.question;

  return (
    <Row>
      <Col>
        <div className="p-3">
          <Button
            variant={
              r.toLowerCase() === "a" && showRightAnswerNow
                ? "success"
                : "light"
            }
            block
            className="text-left"
          >
            <span className="font-weight-bold">A.</span> {a}
          </Button>
          <Button
            variant={
              r.toLowerCase() === "b" && showRightAnswerNow
                ? "success"
                : "light"
            }
            block
            className="text-left"
          >
            <span className="font-weight-bold">B.</span> {b}
          </Button>
          <Button
            variant={
              r.toLowerCase() === "c" && showRightAnswerNow
                ? "success"
                : "light"
            }
            block
            className="text-left"
          >
            <span className="font-weight-bold">C.</span> {c}
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default AnswerAbc;

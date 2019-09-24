import React from "react";
import { Row, Col, Button } from "react-bootstrap/";

const AnswerAbc = props => {
  let { showRightAnswerNow, userClickedAnswer } = props;
  let { r, id } = props.question;

  return (
    <Row>
      <Col>
        {["a", "b", "c"].map(item => {
          return (
            <Button
              variant={
                r.toLowerCase() === item && showRightAnswerNow
                  ? "success"
                  : "light"
              }
              block
              className="text-left"
              onClick={() => userClickedAnswer(id, item)}
            >
              <span className="font-weight-bold">{item}.</span>{" "}
              {props.question[item]}
            </Button>
          );
        })}
      </Col>
    </Row>
  );
};

export default AnswerAbc;

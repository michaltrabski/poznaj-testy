import React from "react";
import { Row, Col, Button } from "react-bootstrap/";

const AnswerYesNo = props => {
  let { showRightAnswerNow, userClickedAnswer } = props;
  let { r, id } = props.question;

  return (
    <Row>
      <Col>
        <div className="p-3 d-flex justify-content-center">
          {["t", "n"].map(item => {
            return (
              <Button
                key={item}
                variant={
                  r.toLowerCase() === item && showRightAnswerNow
                    ? "success"
                    : "light"
                }
                onClick={() => userClickedAnswer(id, item)}
              >
                {item == "t" ? "tak" : "nie"}
              </Button>
            );
          })}
        </div>
      </Col>
    </Row>
  );
};

export default AnswerYesNo;

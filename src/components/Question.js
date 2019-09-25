import React from "react";
import { Row, Col, Button } from "react-bootstrap/";
import Media from "./Media";
import Answer from "./answers/Answer";

const Question = props => {
  const { nr, id, m, q, r } = props.question;
  const { removeQuestion, i } = props;

  return (
    <Row className="border rounded mb-5 py-3 bg-white">
      <Col xs={12} md={6}>
        <Media m={m} />
      </Col>
      <Col xs={12} md={6}>
        <div className="d-flex flex-column h-100">
          <h4>
            <span className="text-secondary">{nr}) </span>
            {q}
          </h4>
          <Answer {...props} />
          <div className="mt-auto d-flex justify-content-end">
            <Button variant="danger" onClick={() => removeQuestion(id)}>
              Usuń pytanie
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Question;

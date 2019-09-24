import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap/";
import Media from "./Media";

class Question extends Component {
  render() {
    const { nr, id, m, q, r } = this.props.question;
    return (
      <Row className="border rounded mb-5 p-3 bg-white">
        <Col xs={12} md={6}>
          <Media m={m} />
        </Col>
        <Col xs={12} md={6}>
          <h4>{q}</h4>
          <Button variant="primary">Następne</Button>
        </Col>
      </Row>
    );
  }
}

export default Question;

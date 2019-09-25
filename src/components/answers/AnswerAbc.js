import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap/";

class AnswerAbc extends Component {
  handleClick = (id, item) => {
    this.props.handleShowAnswerAfterClick(id, item);
  };

  render() {
    let { showRightAnswerNow, shownAnswerAfterClick } = this.props;
    let { r, id } = this.props.question;
    r = r.toLowerCase();

    return (
      <Row>
        <Col>
          {["a", "b", "c"].map(item => {
            return (
              <Button
                key={item}
                variant={
                  (r === item && showRightAnswerNow) ||
                  (r === item && shownAnswerAfterClick)
                    ? "success"
                    : "light"
                }
                block
                className="text-left"
                onClick={() => this.handleClick(id, item)}
              >
                <span className="font-weight-bold">{item.toUpperCase()}) </span>
                {this.props.question[item]}
              </Button>
            );
          })}
        </Col>
      </Row>
    );
  }
}

export default AnswerAbc;

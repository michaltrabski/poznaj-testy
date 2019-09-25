import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap/";

class AnswerAbc extends Component {
  state = {
    showRightAnswerNow: false,
    userClickedAnswer: null
  };

  handleClick = (id, answer) => {
    console.log(id, answer);
    this.setState({
      userClickedAnswer: answer
    });
  };

  render() {
    let { r, id } = this.props.question;
    r = r.toLowerCase();

    const variantColor = (answer, rightAnswer) => {
      const { userClickedAnswer } = this.state;

      if (userClickedAnswer) {
        // console.log("answer: ", answer);
        // console.log("rightAnswer: ", rightAnswer);
        // console.log("userClickedAnswer: ", userClickedAnswer);

        if (answer === rightAnswer) {
          return "success";
        } else {
          if (userClickedAnswer === answer) {
            return "danger";
          } else {
            return "light";
          }
        }
      } else {
        if (this.state.showRightAnswerNow) {
          return answer === rightAnswer ? "success" : "light";
        } else {
          return "light";
        }
      }
    };

    return (
      <Row>
        <Col>
          {["a", "b", "c"].map(item => {
            return (
              <Button
                key={item}
                variant={variantColor(item, r)}
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

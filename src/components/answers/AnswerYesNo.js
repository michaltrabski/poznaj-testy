import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap/";

class AnswerYesNo extends Component {
  state = {
    userClickedAnswer: null
  };

  handleClick = (id, answer) => {
    console.log(id, answer);
    this.setState({
      userClickedAnswer: answer
    });
  };

  render() {
    const { showRightAnswerNow } = this.props;
    let { r, id } = this.props.question;
    r = r.toLowerCase();

    const variantColor = (answer, rightAnswer) => {
      const { userClickedAnswer } = this.state;

      if (userClickedAnswer) {
        console.log("answer: ", answer);
        console.log("rightAnswer: ", rightAnswer);
        console.log("userClickedAnswer: ", userClickedAnswer);

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
        if (showRightAnswerNow) {
          return answer === rightAnswer ? "success" : "light";
        } else {
          return "light";
        }
      }
    };
    return (
      <Row>
        <Col>
          <div className="p-3 d-flex justify-content-center">
            {["t", "n"].map(item => {
              return (
                <Button
                  key={item}
                  variant={variantColor(item, r)}
                  onClick={() => this.handleClick(id, item)}
                >
                  {item === "t" ? "tak" : "nie"}
                </Button>
              );
            })}
          </div>
        </Col>
      </Row>
    );
  }
}

export default AnswerYesNo;

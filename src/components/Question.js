import React, { Component } from "react";
import { Row, Col, Button, Badge } from "react-bootstrap/";
import Media from "./Media";
import Answer from "./answers/Answer";
import Explanation from "./Explanation";
import MichalContext from "./../context/MichalContext";

class Question extends Component {
  state = {
    showExplanation: false
  };

  showExplanation = () => {
    this.setState({ showExplanation: !this.state.showExplanation });
  };

  static contextType = MichalContext;

  render() {
    const { nr, id, m, q, r, pkt, hide } = this.props.question;
    const { removeQuestion, hideQuestion, i } = this.props;

    return hide ? (
      <Row className="border rounded mb-5 py-3 bg-white">
        <Col>
          <h4 className="m-0">
            <span className="text-secondary">{nr}) </span>
            Ukryłeś to pytanie
          </h4>
        </Col>
      </Row>
    ) : (
      <Row className="border rounded mb-5 py-3 bg-white">
        <Col>
          <Row>
            <Col>
              <p>
                <span>{nr})</span> <Badge variant="secondary">kat. B</Badge>{" "}
                <Badge variant="secondary">pkt. {pkt}</Badge>{" "}
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={7}>
              <Media m={m} />
            </Col>
            <Col xs={12} md={5}>
              <div className="d-flex flex-column h-100">
                <h4>
                  {/* <span className="text-secondary">{nr}) </span> */}
                  {q}
                </h4>
                <Answer {...this.props} />
                <div className="mt-auto d-flex">
                  <Button variant="info" onClick={this.showExplanation}>
                    Wyjaśnienie
                  </Button>
                  {this.context.enableRemoveQuestionButton && (
                    <Button
                      className="mr-3"
                      variant="danger"
                      onClick={() => removeQuestion(id)}
                    >
                      Usuń pytanie
                    </Button>
                  )}
                  {this.context.enableHideQuestionButton && (
                    <Button
                      className="mr-3"
                      variant="dark"
                      onClick={() => hideQuestion(id)}
                    >
                      ukryj pytanie
                    </Button>
                  )}
                </div>
              </div>
            </Col>
          </Row>
          {this.state.showExplanation && <Explanation />}
        </Col>
      </Row>
    );
  }
}

export default Question;

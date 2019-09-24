import React, { Component } from "react";
import { questionsList } from "../assets/kat_b_pl";
import Questions from "./Questions";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import { Container, Row, Col } from "react-bootstrap/";

const Background = styled.div`
  background-color: ${props => props.theme.light};
`;

const MaxWidth = styled.div`
  max-width: 1180px;
  margin: auto;
`;

class App extends Component {
  state = {
    questionsList: [...questionsList],
    userHasOptions: {
      userCanSelectCategory: [
        "a",
        "a1",
        "am",
        "b",
        "b1",
        "c",
        "c1",
        "d",
        "d1",
        "pt",
        "t"
      ]
    },
    showRightAnswerNow: true,
    currentCategory: "b",
    startingQuestion: 70,
    questionPerPage: 10,
    isUserLoggedIn: true
  };

  nextQuestion = () => {
    this.setState({
      startingQuestion:
        this.state.startingQuestion + 1 * this.state.questionPerPage
    });
  };

  previesQuestion = () => {
    let { startingQuestion: start, questionPerPage: count } = this.state;
    // console.log(start - 1 * count);
    if (start - 1 * count >= 0)
      this.setState({
        startingQuestion: start - 1 * count
      });
  };

  removeQuestion = id => {
    const newQuestionsList = this.state.questionsList.filter(x => x.id !== id);
    this.setState({
      questionsList: newQuestionsList
    });
  };

  render() {
    const {
      questionsList,
      // userHasOptions,
      currentCategory,
      questionPerPage,
      startingQuestion,
      showRightAnswerNow
    } = this.state;

    return (
      <Background>
        <MaxWidth>
          <Container fluid className="py-5">
            <Row>
              <Col xs={12} md={10}>
                <Questions
                  showRightAnswerNow={showRightAnswerNow}
                  questionsList={questionsList}
                  questionPerPage={questionPerPage}
                  startingQuestion={startingQuestion}
                  nextQuestion={this.nextQuestion}
                  previesQuestion={this.previesQuestion}
                  removeQuestion={this.removeQuestion}
                />
              </Col>
              <Col xs={12} md={2}>
                <p>Ustawienia:</p>
                <p>Kategoria: {currentCategory.toUpperCase()}</p>
                <p>Ilość pytań w bazie: {questionsList.length}</p>
                <p>Ilość pytań na stronie: {questionPerPage}</p>
              </Col>
            </Row>
          </Container>
        </MaxWidth>
      </Background>
    );
  }
}

export default App;

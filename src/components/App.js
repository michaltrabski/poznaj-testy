import React, { Component } from "react";
import { questionsList } from "../assets/kat_b_pl";
import Questions from "./Questions";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import { Container, Row, Col } from "react-bootstrap/";
import MichalContext from "../context/MichalContext";

const Background = styled.div`
  background-color: ${props => props.theme.light};
`;

const MaxWidth = styled.div`
  max-width: ${props => props.theme.pageMaxWidth};
  margin: auto;
`;

class App extends Component {
  state = {
    questionsList: [...questionsList],
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
    ],
    showRightAnswerNow: true,
    currentCategory: "b",
    startingQuestion: 0,
    questionPerPage: 2,
    isUserLoggedIn: true
  };

  changeQuestionPerPage = amount => {
    this.setState({
      questionPerPage: Number(amount)
    });
  };

  toggleshowRightAnswerNow = () => {
    this.setState({
      showRightAnswerNow: !this.state.showRightAnswerNow
    });
  };

  nextQuestion = () => {
    this.setState({
      startingQuestion:
        this.state.startingQuestion + 1 * this.state.questionPerPage
    });
  };

  previesQuestion = () => {
    let { startingQuestion: start, questionPerPage: count } = this.state;
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
      currentCategory,
      questionPerPage,
      startingQuestion
    } = this.state;

    return (
      <MichalContext.Provider
        value={{
          showRightAnswerNow: this.state.showRightAnswerNow,
          userCanSelectCategory: this.state.userCanSelectCategory,
          currentCategory: this.state.currentCategory,
          toggleshowRightAnswerNow: this.toggleshowRightAnswerNow,
          questionPerPage: this.state.questionPerPage,
          changeQuestionPerPage: this.changeQuestionPerPage
        }}
      >
        <Background>
          <MaxWidth>
            <Container fluid className="py-5">
              <Row>
                <Col xs={12} md={10}>
                  <Questions
                    questionsList={questionsList}
                    questionPerPage={questionPerPage}
                    startingQuestion={startingQuestion}
                    nextQuestion={this.nextQuestion}
                    previesQuestion={this.previesQuestion}
                    removeQuestion={this.removeQuestion}
                    userClickedAnswer={this.userClickedAnswer}
                  />
                </Col>
                <Col xs={12} md={2}>
                  <p>Ustawienia:</p>
                  <p>Kategoria: {currentCategory.toUpperCase()}</p>
                  <p>Ilość pytań w bazie: {questionsList.length}</p>
                  <p>Ilość pytań na stronie: {questionPerPage}</p>
                  <p>---------</p>
                  <Sidebar />
                </Col>
              </Row>
            </Container>
          </MaxWidth>
        </Background>
      </MichalContext.Provider>
    );
  }
}

export default App;

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
    showRightAnswerNow: false,
    currentCategory: "b",
    startingQuestion: 0,
    questionPerPage: 1,
    isUserLoggedIn: true
  };

  changeQuestionPerPage = amount => {
    const questionPerPage = Number(amount);
    this.setState({ questionPerPage, startingQuestion: 0 });
  };

  toggleshowRightAnswerNow = () => {
    this.setState({
      showRightAnswerNow: !this.state.showRightAnswerNow
    });
  };

  previesQuestion = () => {
    const { startingQuestion, questionPerPage } = this.state;
    this.setState(
      { startingQuestion: startingQuestion - 1 * questionPerPage },
      () => window.scrollTo(0, 0)
    );
  };

  nextQuestion = () => {
    const { startingQuestion, questionPerPage } = this.state;
    this.setState(
      { startingQuestion: startingQuestion + 1 * questionPerPage },
      () => window.scrollTo(0, 0)
    );
  };

  removeQuestion = id => {
    const questionsList = this.state.questionsList.filter(x => x.id !== id);
    this.setState({ questionsList });
  };

  hideQuestion = id => {
    const questionsList = this.state.questionsList.map(x => {
      if (x.id === id) x.hide = true;
      return x;
    });
    this.setState({ questionsList });
  };

  showExplanation = id => {
    console.log(id);
    // const questionsList = this.state.questionsList.map(x => {
    //   if (x.id === id) x.hide = true;
    //   return x;
    // });
    // this.setState({ questionsList });
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
                    hideQuestion={this.hideQuestion}
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

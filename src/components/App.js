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
    currentCategory: "b",
    startingQuestion: 0,
    questionPerPage: 2,
    isUserLoggedIn: true
  };

  render() {
    const {
      questionsList,
      userHasOptions,
      currentCategory,
      questionPerPage,
      startingQuestion
    } = this.state;

    return (
      <Background>
        <MaxWidth>
          <Container fluid className="pt-5">
            <Row>
              <Col xs={12} md={12}>
                <Questions
                  questionsList={questionsList}
                  questionPerPage={questionPerPage}
                  startingQuestion={startingQuestion}
                />
              </Col>
              {/* <Col xs={12} md={12}>
              sidebar
            </Col> */}
            </Row>
          </Container>
        </MaxWidth>
      </Background>
    );
  }
}

export default App;

import React from "react";
import Question from "./Question";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 0 0 80%;
  max-width: 80%;
`;

const Questions = ({ questionsList, startingQuestion, questionPerPage }) => {
  const sliceTo = startingQuestion + questionPerPage;

  return (
    <Wrapper>
      {questionsList.slice(startingQuestion, sliceTo).map(question => {
        return <Question key={question.id} question={question} />;
      })}
    </Wrapper>
  );
};

export default Questions;

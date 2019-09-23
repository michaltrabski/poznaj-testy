import React from "react";
import Question from "./Question";
// import styled, { css } from "styled-components";

const Questions = ({ questionsList }) => {
  return (
    <>
      {questionsList.slice(0, 4).map(question => {
        return <Question key={question.id} question={question} />;
      })}
    </>
  );
};

export default Questions;

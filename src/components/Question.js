import React, { Component } from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  margin: 10px;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

class Question extends Component {
  render() {
    const { nr, id, m, q, r } = this.props.question;
    return (
      <Wrapper>
        <p>nr: {nr}</p>
        <p>id: {id}</p>
        <p>media: {m}</p>
        <h4>pytanie: {q}</h4>
        <p>odpowiedź: {r}</p>
      </Wrapper>
    );
  }
}

export default Question;

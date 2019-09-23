import React, { Component } from "react";
import styled, { css } from "styled-components";
import Media from "./Media";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  padding: 10px;
  border: 1px solid ${props => props.theme.gray300};
  border-radius: 5px;
`;

const LeftColumn = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
`;

const RightColumn = styled(LeftColumn)``;

class Question extends Component {
  render() {
    const { nr, id, m, q, r } = this.props.question;
    return (
      <Wrapper>
        <LeftColumn>
          <Media m={m} />
        </LeftColumn>
        <RightColumn>
          <span>{nr}</span>
          <span>id: {id}</span>
          <span>m: {m}</span>
          <h4>pytanie: {q}</h4>
          <p>odpowiedź: {r}</p>
        </RightColumn>
      </Wrapper>
    );
  }
}

export default Question;

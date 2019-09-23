import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 0 0 20%;
  max-width: 20%;
  background-color: ${props => props.theme.gray200};
`;

const Sidebar = props => {
  return (
    <Wrapper>
      <p>Ustawienia:</p>
    </Wrapper>
  );
};

export default Sidebar;

import React, { Component } from "react";
import styled, { css } from "styled-components";

const Media = props => {
  const path = " (D)szkolenia wideomedia testy na prawo jazdy 9.2019";
  return (
    <video width="320" height="240" controls>
      <source src={props.m} type="video/wmv" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Media;

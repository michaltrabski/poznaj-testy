import React, { Component } from "react";
import styled, { css } from "styled-components";

const Media = props => {
  const path = "https://poznaj-testy.pl/wp-content/uploads/media/";

  let media = props.m;
  if (media.toString().indexOf(".wmv") > -1) {
    media = media.toString().replace(".wmv", ".mp4");
  }

  return (
    <video width="200" controls>
      <source src={path + media} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Media;

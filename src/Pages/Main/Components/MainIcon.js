import React, { Component } from "react";
import styled from "styled-components";
import { font, theme } from "../../../Styles/GlobalStyles";

function MainIcon({ iconsData }) {
  return (
    <Icon>
      <img src={iconsData.url} />
      <p>{iconsData.tool}</p>
    </Icon>
  );
}

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 14%;
  height: 200px;

  img {
    width: 80%;
    height: auto;
  }

  p {
    width: 100%;
    margin-top: 30px;
    ${font("Spartan", 17, 700)};
    text-align: center;
    color: ${theme.mediumGrey};
  }
`;

export default MainIcon;

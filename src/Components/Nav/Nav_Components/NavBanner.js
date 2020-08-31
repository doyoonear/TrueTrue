import React, { Component, useState } from "react";
import styled from "styled-components";
import {
  MoveCenter,
  FlexRow,
  FlexCenter,
  font,
  theme,
} from "../../../Styles/GlobalStyles";

const NavBanner = ({ visibleToggle }) => {
  return (
    <BannerStyle>
      <CloseBtn onClick={visibleToggle}>
        <img alt="close button" src="/Images/main_images/close.webp" />
      </CloseBtn>
      <BannerText>
        Get 40% off everything now & forever with the Complete Collection
        Bundle.
      </BannerText>
    </BannerStyle>
  );
};

const BannerStyle = styled.div`
  position: relative;
  ${MoveCenter};
  height: 5%;
  background-color: ${theme.darkGrey};
  z-index: 50;
`;

const BannerText = styled.div`
  width: 500px;
  color: ${theme.lightGrey};
  ${font("Spartan", 11, 600)};
  text-align: center;
`;

const CloseBtn = styled.div`
  position: absolute;
  right: 10px;

  img {
    width: 10px;
    height: 10px;
    cursor: pointer;
  }
`;

export default NavBanner;

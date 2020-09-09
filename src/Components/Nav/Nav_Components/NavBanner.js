import React from "react";
import styled from "styled-components";
import { MoveCenter, font, theme } from "../../../Styles/GlobalStyles";

const NavBanner = ({ hideDropDown, hideDropDownFunc, visibleToggle }) => {
  return (
    <BannerStyle>
      <CloseBtn hideDropDown={hideDropDown} onClick={visibleToggle}>
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
  height: 40px;
  background-color: ${theme.darkGrey};
  z-index: 900;
`;

const BannerText = styled.div`
  width: 500px;
  color: ${theme.lightGrey};
  ${font("Spartan", 11, 600)};
  text-align: center;
`;

const CloseBtn = styled.div`
  position: absolute;
  right: 35px;
  display: ${({ hideDropDown }) => (hideDropDown ? "block" : "none")};
  img {
    width: 10px;
    height: 10px;
    cursor: pointer;
  }
`;

export default NavBanner;

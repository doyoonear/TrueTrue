import React, { Component, useState } from "react";
import styled, { keyframes } from "styled-components";
import NavBanner from "./NavBanner";
import Category from "../Category";
import { MoveCenter, font, theme } from "../../../Styles/GlobalStyles";

const category = {
  "For Photoshop": [
    "Brushes",
    "Actions",
    "Effects Kits",
    "Texture Packs",
    "Value Bundles",
  ],
  "For Illustrator": [
    "Brushes",
    "Actions",
    "Swatches",
    "Texture Packs",
    "Value Bundles",
  ],
  "For Procreate": [
    "Brushes",
    "Effects Kits",
    "Brush Bundles",
    "Value Bundles",
  ],
  "For Affinity": ["Brushes", "Effects Kits", "BYOB", "Value Bundles"],
  "Other Stuff": [
    "Free Sampler",
    "Interviews",
    "How-To's",
    "Artists",
    "Gift Cards",
  ],
};

function NavDropDown() {
  return (
    <DropDown>
      {Object.keys(category).map((title) => {
        return <Category title={title} list={category[title]} />;
      })}
    </DropDown>
  );
}

const moveDown = keyframes`
  0% {
    top: -400px;
  100% {
    top: -75px;
  }
`;

const moveUp = keyframes`
  0% {
    top: -75px;
  100% {
    top: -400px;
  }
`;

const DropDown = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  animation: ${moveDown} 1s ease-out;
  animation-direction: alternate;
  animation-fill-mode: forwards;
  top: -75px;
  padding-top: 80px;
  width: 100vw;
  height: 250px;
  background-color: ${theme.darkGrey};
  z-index: 2;

  li {
    width: 120px;
    height: 18px;
    color: ${theme.lightGrey};
    ${font("Spartan", 13, 500)};
    letter-spacing: calc(1rem / 20);
    cursor: default;

    &:first-child {
      display: flex;
      align-items: center;
      width: 105px;
      height: 35px;
      border-top: 1px solid ${theme.lightGrey};
      border-bottom: 1px solid ${theme.lightGrey};
      ${font("Spartan", 13, 700)};

      &:hover {
        color: white;
      }
    }

    &:nth-child(2) {
      padding-top: 15px;
      height: 35px;
    }

    span:hover {
      color: white;
      border-bottom: 1px solid white;
    }
  }
`;

export default NavDropDown;

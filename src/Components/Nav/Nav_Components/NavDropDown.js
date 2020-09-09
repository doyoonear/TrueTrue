import React from "react";
import Category from "./Category";
import styled from "styled-components";
import { font, theme } from "../../../Styles/GlobalStyles";

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

function NavDropDown({ hideDropDown, hideDropDownFunc, visible }) {
  return (
    <DropDown hideDropDown={hideDropDown} visible={visible}>
      {Object.keys(category).map((title, idx) => {
        return <Category key={idx} title={title} list={category[title]} />;
      })}
      <CloseDropBtn
        onClick={hideDropDownFunc}
        alt="close button"
        src="/Images/main_images/close.webp"
      />
    </DropDown>
  );
}

const DropDown = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  transition-duration: 1s;
  padding-top: 80px;
  width: 100vw;
  height: ${({ visible }) => (visible ? "360px" : "330px")};
  background-color: ${theme.darkGrey};
  z-index: 800;
  top: ${({ visible, hideDropDown }) =>
    !hideDropDown ? 0 : visible ? -400 : -450}px;

  ul {
    margin-top: ${({ visible }) => (visible ? "30px" : "0px")};
  }

  li {
    width: 148px;
    height: 25px;
    color: ${theme.lightGrey};
    ${font("Inconsolata", 13, 500)};
    letter-spacing: calc(1rem / 20);
    cursor: default;

    &:first-child {
      display: flex;
      align-items: center;
      width: 130px;
      height: 43px;
      border-top: 1px solid ${theme.lightGrey};
      border-bottom: 1px solid ${theme.lightGrey};
      ${font("Spartan", 12, 600)};

      &:hover {
        color: white;
      }
    }

    &:nth-child(2) {
      padding-top: 15px;
      margin-bottom: 5px;
      height: 35px;
    }

    span:hover {
      border-bottom: 1px solid white;
      color: white;
    }
  }
`;

const CloseDropBtn = styled.img`
  position: absolute;
  top: 60px;
  right: 35px;
  width: 10px;
  height: 10px;
`;

export default NavDropDown;

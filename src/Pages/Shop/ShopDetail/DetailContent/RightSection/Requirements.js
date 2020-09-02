import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import GlobalStyles, {
  theme,
  font,
  MoveCenter,
} from "../../../../../Styles/GlobalStyles";

function Requirements({ show }) {
  return (
    <>
      <Container show={show}>
        <MsgBox>
          Suitable for novice to expert Photoshop users.
          <br />
          <br /> SOFTWARE: Adobe Photoshop CS6 or higher. <br /> HARDWARE:
          2.4ghz processor or higher.
          <br /> ACCESSORIES: Graphics tablet required.
          <br /> MEMORY: 8gb RAM or higher. (16+ recommended).
          <br /> STORAGE: 120mb of available storage space.
          <br />
          <br />
          <br /> Note: Included brushes and functionality varies between
          Photoshop and Procreate. Please check individual product pages for
          exact inclusions and brush previews.
          <br />
        </MsgBox>
      </Container>
    </>
  );
}

export default Requirements;

const Container = styled.div`
  width: 100%;
  padding: 30px 10px 30px 10px;
  display: ${({ show }) => (show ? "block" : "none")};
  border-bottom: 1px solid #b3afaa;
`;

const MsgBox = styled.div`
  width: 100%;
  text-align: center;
  line-height: 24.22px;
  letter-spacing: 0.8px;
  ${font("Inconsolata", 15)}
`;

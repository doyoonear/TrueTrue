import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import GlobalStyles, {
  theme,
  font,
  MoveCenter,
} from "../../../../../Styles/GlobalStyles";

function Requirements({ show, text }) {
  return (
    <>
      <Container show={show}>
        <MsgBox>{text}</MsgBox>
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

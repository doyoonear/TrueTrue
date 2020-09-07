import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles, {
  MoveCenter,
  Font,
  Theme,
} from "../../../Styles/GlobalStyles.js";

function EmailValCheck() {
  return (
    <>
      <ValCheckMessage>Please enter a valid email address.</ValCheckMessage>
    </>
  );
}

export default EmailValCheck;

const ValCheckMessage = styled.div`
  font-size: 12px;
  color: red;
`;

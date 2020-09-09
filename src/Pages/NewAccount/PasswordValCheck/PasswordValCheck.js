import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles, {
  MoveCenter,
  font,
  theme,
} from "../../../Styles/GlobalStyles.js";

function PasswordValCheck() {
  return <ValCheckMessage>Please enter a valid password.</ValCheckMessage>;
}

export default PasswordValCheck;

const ValCheckMessage = styled.div`
  font-size: 12px;
  color: red;
`;

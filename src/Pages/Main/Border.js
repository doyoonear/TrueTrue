import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import { theme } from "../../Styles/GlobalStyles";

function Border() {
  return (
    <>
      <BorderStyleLeft />
      <BorderStyleRight />
      <BorderStyleBtm />
    </>
  );
}

const BorderStyleLeft = styled.div`
  position: fixed;
  width: 1.5%;
  height: 100%;
  background-color: ${theme.darkGrey};
  z-index: 999;
`;

const BorderStyleRight = styled(BorderStyleLeft)`
  right: 0;
`;

const BorderStyleBtm = styled.div`
  position: fixed;
  top: 97.5%;
  width: 100%;
  height: 150px;
  background-color: ${theme.darkGrey};
  z-index: 999;
`;

export default Border;

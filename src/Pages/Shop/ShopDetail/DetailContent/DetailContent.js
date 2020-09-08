import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import LeftSection from "./LeftSection/LeftSection";
import RightSection from "./RightSection/RightSection";
import GlobalStyles, {
  theme,
  font,
  MoveCenter,
} from "../../../../Styles/GlobalStyles";

function DetailContent(props) {
  return (
    <>
      <Container>
        <SectionContainer>
          <LeftSection text={props.data} />
          <RightSection text={props.data} />
        </SectionContainer>
      </Container>
      <SectionMarginContainer />
    </>
  );
}

export default withRouter(DetailContent);

const Container = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  padding-right: 30px;
  margin-top: 93px;
  background-color: ${theme.lightBeige};
`;

const SectionContainer = styled.div`
  display: flex;
  margin: 0 205px;
`;

const SectionMarginContainer = styled.div`
  width: 100%;
  height: 157px;
  background-color: ${theme.lightBeige};
`;

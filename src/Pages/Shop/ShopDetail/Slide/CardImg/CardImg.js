import React, { Component, useState } from "react";
import styled from "styled-components";

function CardImg(props) {
  return (
    <Card>
      <img alt="슬라이드 이미지 데이터" src={props.url} />
    </Card>
  );
}

export default CardImg;

const Card = styled.div`
  width: 915px;
  height: 610px;
  margin-right: 30px;
  cursor: url("/Images/Mouse__Enlarge_Icon.png"), auto;
`;

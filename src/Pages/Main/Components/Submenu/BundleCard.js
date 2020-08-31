import React from "react";
import styled from "styled-components";
import { font, theme } from "../../../../Styles/GlobalStyles";

function BundleCard({ product }) {
  const [normalPrice, discountPrice] = product.price;
  if (product) {
    return (
      <BundleCardStyle>
        <BundleCardImg src={product.image} />
        <BundleCardTitle>{product.name}</BundleCardTitle>
        <TextBox>
          <BundleCardIcon />
          <CardText>
            <p>{product.sub_name}</p>
            For <span>{product.editor}</span> | <span>From </span>
            <span>{"$" + normalPrice}</span>
            <span>{discountPrice && "$" + discountPrice}</span>
          </CardText>
        </TextBox>
      </BundleCardStyle>
    );
  } else {
    return null;
  }
}

const BundleCardStyle = styled.div`
  width: 31.5%;
`;

const BundleCardTitle = styled.div`
  margin-top: 15px;
  ${font("Spartan", 17, 700)};
  line-height: 1.5;
  color: ${theme.mediumGrey};
`;

const BundleCardImg = styled.img`
  width: 100%;
  height: auto;
`;

const BundleCardIcon = styled.img.attrs({
  src:
    "//cdn.shopify.com/s/files/1/0989/0116/t/21/assets/ave.png?v=11583723794462654278",
})`
  width: auto;
  height: 55%;
`;

const TextBox = styled.div`
  display: flex;
  width: 300px;
  height: 50px;
  margin-top: 10px;
`;

const CardText = styled.p`
  width: 100%;
  margin-left: 15px;
  ${font("Inconsolata", 14, 300)}
  color: ${theme.mediumGrey};

  span {
    &:nth-child(2) {
      border-bottom: 1px solid ${theme.mediumGrey};
      ${font("Inconsolata", 14, 500)};
    }
    &:nth-child(4) {
      ${font("Inconsolata", 14, 700)}
    }
    &:last-child {
      margin-left: 5px;
      color: #d80000;
      text-decoration: line-through;
      ${font("Inconsolata", 14, 700)}
    }
  }
`;

export default BundleCard;

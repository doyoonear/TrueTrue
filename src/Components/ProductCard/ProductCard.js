import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";
import { Redirect } from "react-router";
import GlobalStyles, {
  MoveCenter,
  font,
  theme,
} from "../../Styles/GlobalStyles.js";

function ProductCard({ productData }) {
  const refresh = (e) => {
    e(window.location.reload());
  };

  return (
    <>
      {productData.map((v, idx) => {
        return (
          <ProductCardList key={idx}>
            <Link to={`/shop/shop-detail/${idx + 1}`}>
              <Img src={v.image} />
            </Link>
            <ProductInfo>
              <NameMain>{v.name}</NameMain>
              <InfoBox>
                {v.is_discounted && (
                  <Save src="//cdn.shopify.com/s/files/1/0989/0116/t/21/assets/Save_Icon_2x.png?v=10738136398509521931" />
                )}
                <Info>
                  <NameSub>{v.sub_name}</NameSub>
                  <PriceInfo>
                    <Type>
                      for<Link to="#">{v.editor}</Link> |
                    </Type>
                    <From anyApp={v.editor}>From</From>
                    <PriceBox anyApp={v.editor}>
                      <Price
                        price1={v.price[0]}
                        price2={v.price[1]}
                        isDiscounted={v.is_discounted}
                      >
                        ${v.price[1]}
                      </Price>
                      <Price isDiscounted={v.is_discounted}>
                        ${v.price[0]}
                      </Price>
                    </PriceBox>
                  </PriceInfo>
                </Info>
              </InfoBox>
            </ProductInfo>
          </ProductCardList>
        );
      })}
    </>
  );
}

export default ProductCard;

const ProductCardList = styled.li`
  width: 25%;
  height: auto;
  padding-left: 30px;
  margin-bottom: 40px;
  list-style: none;
  background-color: ${theme.lightBeige};
  z-index: 1;
`;

const Img = styled.img`
  width: 330px;
  height: 220px;
  background-color: green;
  opacity: 1;

  &:hover {
    opacity: 0.5;
    transition: 0.3s ease-out;
    cursor: pointer;
  }
`;

const ProductInfo = styled.div`
  margin-top: 13px;
`;

const NameMain = styled.div`
  ${font("Spartan", 17, 800)}
  color: ${theme.mediumGrey};
`;

const InfoBox = styled.div`
  display: flex;
  margin-top: 5px;
  ${font("Inconsolata", 15, "normal")}
  line-height: 20px;
  color: ${theme.mediumGrey};
`;

const Save = styled.img`
  width: 50px;
  height: 27px;
  margin: 6px 10px 0 0;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const NameSub = styled.div`
  ${font("Inconsolata", 15, "normal")}
  color: ${theme.mediumGrey};
  line-height: 20px;
`;

const PriceInfo = styled.div`
  display: flex;
`;

const Type = styled.div`
  a {
    margin-left: 5px;
    color: ${theme.mediumGrey};
    border-bottom: 1px solid ${theme.mediumGrey};
  }
`;

const From = styled.div`
  display: ${(props) => (props.anyApp === "Any App" ? "block" : "none")};
  font-weight: 700;
  margin-left: 10px;
`;

const PriceBox = styled.div`
  display: flex;
  font-weight: 700;
`;

const Price = styled.div`
  margin-left: 10px;

  &:first-of-type {
    text-decoration: ${(props) =>
      props.isDiscounted ? "line-through" : "none"};
    display: ${(props) =>
      props.isDiscounted && props.price1 === props.price2 ? "none" : "block"};
  }

  &:last-of-type {
    display: ${(props) => (props.isDiscounted ? "block" : "none")};
    color: #e32c2b;
  }
`;

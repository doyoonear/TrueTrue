import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Nav from "../../../Components/Nav/Nav";
import Slide from "./Slide/Slide";
import DetailContent from "./DetailContent/DetailContent";
import CartModal from "../../../Components/CartModal/CartModal";
import { config } from "../../../config";
import GlobalStyles, {
  MoveCenter,
  Khand,
  Font,
  theme,
} from "../../../Styles/GlobalStyles";
import ProductCard from "../../../Components/ProductCard/ProductCard";

function ShopDetail(props) {
  const [data, setImgData] = useState({});
  const name = props.match.params.product;

  useEffect(() => {
    fetch(`${config.api}/product/details?target=${name}`)
      .then((res) => res.json())
      .then((res) => setImgData(res.data));
  }, [name]);

  const [productData, setProductData] = useState([]);
  const [offset, setOffset] = useState(0);
  const LIMIT = 8;

  useEffect(() => {
    // api 가 나오면 사용할 fetch 함수
    fetch(
      `${
        config.api
      }/product/products?category=PhotoShop&limit=${LIMIT}&offset=${
        offset * LIMIT
      }`
    )
      // fetch("/Data/ProductCard.json")
      .then((res) => res.json())
      .then((res) => setProductData(res.data));
  }, [offset]);

  console.log(productData);

  return (
    <>
      <ShopDetailBody>
        <Slide data={data} />
        <DetailContent data={data} />
      </ShopDetailBody>
      <CardContainer>
        <ProductCard productData={productData} />
      </CardContainer>
    </>
  );
}

export default ShopDetail;

const ShopDetailBody = styled.div`
  position: relative;
  top: 120px;
  background-color: ${theme.lightBeige};
  z-index: 0;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  z-index: 3;
  background-color: ${theme.lightBeige};
`;

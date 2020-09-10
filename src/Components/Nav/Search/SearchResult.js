import React, { useState, useEffect } from "react";
import ProductCard from "../../ProductCard/ProductCard";
import styled from "styled-components";
import { font, theme } from "../../../Styles/GlobalStyles";

function SearchResult(props) {
  const [productData, setProductData] = useState([]);
  const resultValue = props.match.params.result;

  useEffect(
    (props) => {
      fetch(
        `http://192.168.200.123:8000/product/search?search_keyword=${resultValue}`
      )
        .then((res) => res.json())
        .then((res) => setProductData(res.data));
    },
    [resultValue]
  );

  return (
    <div>
      <ResultWhole>
        <ResultText>9 results for {props.match.params.result}</ResultText>
        <ResultInputBox>
          <ResultInput placeholder="search" />
          <SearchAgainBtn>Search</SearchAgainBtn>
        </ResultInputBox>
        <ProductCardBox>
          <ProductCard productData={productData} />
        </ProductCardBox>
      </ResultWhole>
    </div>
  );
}

const ResultWhole = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.lightBeige};
`;

const ResultText = styled.div`
  margin-top: 80px;
  ${font("Spartan", 22, 700)};
  color: ${theme.darkGrey};
`;

const ResultInputBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 35px;
`;

const ResultInput = styled.input`
  width: 250px;
  height: 45px;
  border: 1px solid ${theme.darkGrey};
  ${font("Inconsolata", 15, 300)};
  text-indent: 20px;
`;

const SearchAgainBtn = styled.button`
  width: 130px;
  height: 45px;
  ${font("Spartan", 13, 700)};
  letter-spacing: calc(1rem / 10);
  line-height: 45px;
  text-transform: uppercase;
  color: white;
  background-color: ${theme.darkGrey};
`;

const ProductCardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 80px;
`;

export default SearchResult;

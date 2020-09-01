import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import GlobalStyles, {
  MoveCenter,
  font,
  theme,
} from "../../../Styles/GlobalStyles.js";

function ShopList() {
  const [productData, setProductData] = useState([]);
  const [offset, setOffset] = useState(0);
  const LIMIT = 24;

  useEffect(() => {
    // api 가 나오면 사용할 fetch 함수
    // fetch(
    //   `http://{config.api}/shoplist?limit=${LIMIT}&offset=${offset * LIMIT}`
    // )
    fetch("/Data/ProductCard.json")
      .then((res) => res.json())
      .then((res) => setProductData(res.data));
  }, [offset]);

  const getMoreProduct = () => {
    setOffset(offset + 1);
  };

  return (
    <ShopListPage>
      <ShopListContainer>
        <Header>
          <Title>FOR PHOTOSHOP</Title>
          <Sort>
            SORT: Featured
            <Img src="//cdn.shopify.com/s/files/1/0989/0116/t/21/assets/Small_Right_Arrow_2x.png?v=12760837742763450424" />
          </Sort>
        </Header>
        <ShopListBox>
          <ProductCard productData={productData} />
        </ShopListBox>
        <ButtonContainer>
          <Button onClick={getMoreProduct}>LOAD MORE</Button>
        </ButtonContainer>
      </ShopListContainer>
    </ShopListPage>
  );
}
export default ShopList;

const ShopListPage = styled.div`
  background-color: ${theme.lightBeige};
`;

const ShopListContainer = styled.div`
  padding: 62px 12px 200px 12px;
  background-color: ${theme.lightBeige};
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 0 30px 62px;
  line-height: 1.5;
  border-bottom: 1px solid ${theme.mediumGrey};
`;

const Title = styled.div`
  ${font("Khand", 22, 600)};
  color: ${theme.mediumGrey};
`;

const Sort = styled.div`
  padding: 7px 17px 3px 17px;
  ${font("Spartan", 13, 700)};
  color: ${theme.mediumGrey};
  letter-spacing: 1.2px;
  border: 1px solid ${theme.mediumGrey};
  border-bottom: none;
`;

const Img = styled.img`
  width: 11px;
  height: 8.8px;
  margin-left: 2px;
  transform: rotate(90deg);
`;

const ShopListBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-right: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const Button = styled.button`
  padding: 10px 27px 8px 27px;
  ${font("Spartan", 14, 700)};
  letter-spacing: 1.2px;
  color: ${theme.mediumGrey};
  border: 1px solid ${theme.mediumGrey};

  &:hover {
    color: ${theme.lightBeige};
    background: ${theme.darkGrey};
  }
`;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slide from "./Slide/Slide";
import DetailContent from "./DetailContent/DetailContent";
import CartModal from "../../../Components/CartModal/CartModal";
import GlobalStyles, {
  MoveCenter,
  Khand,
  Font,
  theme,
} from "../../../Styles/GlobalStyles";

function ShopDetail(props) {
  const [data, setImgData] = useState({});
  const name = props.match.params.product;

  useEffect(() => {
    fetch(`http://192.168.200.123:8000/product/details?target=${name}`)
      .then((res) => res.json())
      .then((res) => setImgData(res.data));
  }, [name]);

  return (
    <ShopDetailBody>
      <CartModal />
      <Slide data={data} />
      <DetailContent data={data} />
    </ShopDetailBody>
  );
}

export default ShopDetail;

const ShopDetailBody = styled.div`
  background-color: ${theme.lightBeige};
`;

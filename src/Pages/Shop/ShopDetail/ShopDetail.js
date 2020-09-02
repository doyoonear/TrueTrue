import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slide from "./Slide/Slide";
import DetailContent from "./DetailContent/DetailContent";
import GlobalStyles, {
  MoveCenter,
  Khand,
  Font,
  theme,
} from "../../../Styles/GlobalStyles";

function ShopDetail(props) {
  const [data, setImgData] = useState([]);
  const name = props.match.params.product;

  useEffect(() => {
    fetch("/Data/shopDetailData.json")
      .then((res) => res.json())
      .then((res) => setImgData(res[name]));
  }, [name]);

  return (
    <ShopDetailBody>
      <Slide data={data} />
      <DetailContent data={data} />
    </ShopDetailBody>
  );
}

export default ShopDetail;

const ShopDetailBody = styled.div`
  background-color: ${theme.lightBeige};
`;

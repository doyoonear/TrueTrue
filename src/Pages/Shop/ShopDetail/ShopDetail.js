import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slide from "./Slide/Slide";
import DetailContent from "./DetailContent/DetailContent";
import GlobalStyles, {
  MoveCenter,
  Khand,
  Font,
} from "../../../Styles/GlobalStyles";

function ShopDetail() {
  const [data, setImgData] = useState([]);

  useEffect(() => {
    fetch("/Data/shopDetailData.json")
      .then((res) => res.json())
      .then((res) => setImgData(res));
  }, []);

  return (
    <div>
      <Slide data={data} />
      <DetailContent data={data} />
    </div>
  );
}

export default ShopDetail;

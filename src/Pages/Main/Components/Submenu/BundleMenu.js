import React from "react";
import BundleMenuBar from "./BundleMenuBar";
import BundleCard from "./BundleCard.js";
import styled from "styled-components";
import { theme } from "../../../../Styles/GlobalStyles";

function BundleMenu({ bundle }) {
  return (
    <BundleMenuStyle>
      <BundleMenuBar bundle={bundle} />
      <BundleCardBox>
        {bundle &&
          bundle.list.map((el, idx) => {
            return <BundleCard key={idx} product={el} />;
          })}
      </BundleCardBox>
    </BundleMenuStyle>
  );
}

const BundleMenuStyle = styled.div`
  height: 700px;
  padding: 60px 62px 30px 62px;
  background-color: ${theme.darkBeige};
`;

const BundleCardBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30%;
`;

export default BundleMenu;

import React from "react";
import styled from "styled-components";
import { font, theme } from "../../../../Styles/GlobalStyles";
import { Link } from "react-router-dom";

function BundleMenuBar({ bundle }) {
  return (
    <BundleMenuBarStyle>
      <ButtonBar>
        <span>{bundle && bundle.category_title[0]}</span>
        <Link to="/shoplist">
          <MenuButton>
            {bundle && bundle.category_title[1]}
            <img src="//cdn.shopify.com/s/files/1/0989/0116/t/21/assets/Small_Right_Arrow_2x.png?v=12760837742763450424" />
          </MenuButton>
        </Link>
        <Line />
      </ButtonBar>
    </BundleMenuBarStyle>
  );
}

const BundleMenuBarStyle = styled.div`
  height: 15%;
  color: ${theme.darkGrey};
  ${font("Pathway Gothic One", 22, 500)};

  img {
    width: 10px;
  }
`;

const ButtonBar = styled.div`
  position: relative;
`;

const MenuButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0px;
  width: 170px;
  height: 30px;
  border: 1px solid ${theme.darkGrey};
  color: ${theme.darkGrey};
  ${font("Spartan", 12, 700)}
  letter-spacing: 1px;

  img {
    margin-left: 10px;
  }
`;

const Line = styled.div`
  height: 1px;
  background-color: ${theme.darkGrey};
`;

export default BundleMenuBar;

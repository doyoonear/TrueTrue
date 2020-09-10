import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { font, theme } from "../../../Styles/GlobalStyles";

function Search(props) {
  const [searchActive, setSearchActive] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const getInputVal = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <SearchWhole>
        <MainLogo
          alt="main logo"
          src={
            searchActive
              ? "//cdn.shopify.com/s/files/1/0989/0116/t/21/assets/TGTS_Main_Logo_2x-Menu-exp.png?v=1732527511903274378"
              : "/Images/main_images/logo_dark.webp"
          }
        />
        <SearchContainer>
          <SearchBox
            placeholder="What are you looking for ?"
            onChange={(e) => getInputVal(e)}
          />
          <SearchIcon
            onClick={() => props.history.push(`/search/${searchValue}`)}
            alt="search icon"
            src="//cdn.shopify.com/s/files/1/0989/0116/t/21/assets/search-top.png?v=4847803783439352792"
          />
        </SearchContainer>
        <SearchDelBtn alt="close button" src="/Images/main_images/close.webp" />
      </SearchWhole>
    </div>
  );
}

const SearchWhole = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 100%;
  height: 105px;
  background-color: ${theme.darkGrey};
  z-index: 990;
`;

const MainLogo = styled.img`
  width: 10px;
  padding-left: 35px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 650px;
  height: 100%;
`;

const SearchBox = styled.input`
  display: flex;
  width: 500px;
  height: 100%;
  ${font("Spartan", 20, 700)};
  text-align: right;
  letter-spacing: calc(1rem / 20);
  color: ${theme.lightGrey};
`;

const SearchIcon = styled.img`
  width: auto;
  height: 25px;
`;

const SearchDelBtn = styled.img`
  position: relative;
  right: 35px;
  width: 12px;
  height: 12px;
  cursor: pointer;
`;

export default withRouter(Search);

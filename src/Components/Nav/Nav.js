import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBanner from "./Nav_Components/NavBanner";
import NavDropDown from "./Nav_Components/NavDropDown";
import Login from "./Login/Login";
import Search from "./Search/Search";
import styled from "styled-components";
import { MoveCenter, font, theme } from "../../Styles/GlobalStyles";

const navCategory = ["FREE STUFF", "ABOUT", "BLOG", "GALLERY", "SUPPORT"];

function Nav() {
  const [visible, setVisible] = useState(true);
  const [hideDropDown, setHideDropDown] = useState(true);
  const [loginActive, setLoginActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const visibleToggle = () => {
    setVisible(!visible);
  };

  const hideDropDownFunc = () => {
    setHideDropDown(!hideDropDown);
  };

  const loginToggle = () => {
    setLoginActive(!loginActive);
  };

  const searchToggle = () => {
    setSearchActive(!searchActive);
  };

  return (
    <nav>
      <Search searchActive={searchActive} searchToggle={searchToggle} />
      <NavWhole loginActive={loginActive}>
        <Login loginActive={loginActive} loginToggle={loginToggle} />
        {visible && (
          <NavBanner
            visible={visible}
            hideDropDown={hideDropDown}
            visibleToggle={visibleToggle}
          />
        )}
        <NavBar>
          <Link to="/">
            <LogoBox>
              <MainLogo
                alt="logo"
                src={
                  hideDropDown
                    ? "/Images/main_images/logo_dark.webp"
                    : "//cdn.shopify.com/s/files/1/0989/0116/t/21/assets/TGTS_Main_Logo_2x-Menu-exp.png?v=1732527511903274378"
                }
              />
            </LogoBox>
          </Link>
          <NavText hideDropDown={hideDropDown} visible={visible}>
            <li>
              <span onClick={hideDropDownFunc}>SHOP </span>
              <DownArrow
                alt="down arrow"
                src={
                  hideDropDown
                    ? "//cdn.shopify.com/s/files/1/0989/0116/t/21/assets/down.png?v=8533168883242876854"
                    : "/Images/main_images/down_white.webp"
                }
              />
            </li>
            {navCategory.map((el, idx) => {
              return (
                <li key={idx}>
                  <span>{el}</span>
                </li>
              );
            })}
          </NavText>
          <Icons>
            <img
              onClick={searchToggle}
              alt="search icon"
              src="/Images/main_images/search_icon.webp"
            />
            <p>$USD</p>
            <img
              onClick={loginToggle}
              alt="account icon"
              src="/Images/main_images/account_icon.svg"
            />
            <CartIcon
              src={
                cartActive
                  ? "/Images/main_images/cart_active.webp"
                  : "/Images/main_images/cart_icon.svg"
              }
            />
          </Icons>
        </NavBar>
        <NavDropDown
          hideDropDown={hideDropDown}
          hideDropDownFunc={hideDropDownFunc}
          visible={visible}
        />
      </NavWhole>
    </nav>
  );
}

const NavWhole = styled.nav`
  position: fixed;
  width: 100%;
  top: ${({ loginActive }) => (loginActive ? "0px" : "-321.3px")}};
  transition-duration: 1s;
  background-color: ${theme.darkGrey};
  z-index: 900;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  background-color: ${theme.darkBeige};
`;

const LogoBox = styled.div`
  width: 220px;
`;

const MainLogo = styled.img`
  width: 155px;
  padding-left: 55px;
  z-index: 900;
`;

const NavText = styled.div`
  display: flex;
  color: ${({ hideDropDown }) =>
    hideDropDown ? theme.darkGrey : theme.lightGrey};
  ${font("Spartan", 12, 700)};
  z-index: 900;
  cursor: default;

  li {
    position: relative;
    ${MoveCenter};
    width: 7rem;
    letter-spacing: calc(1rem / 10);

    span {
      &:hover {
        padding: 3px 0;
        margin: -6px 0;
        border-top: 2px solid ${theme.darkGrey};
        border-bottom: 2px solid ${theme.darkGrey};
        color: ${({ hideDropDown }) =>
          hideDropDown ? theme.darkGrey : "white"};
      }
    }
  }
`;

const DownArrow = styled.img`
  position: absolute;
  top: 30%;
  right: 15%;
  width: 6px;
  height: 5px;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 220px;
  padding-right: 55px;

  div {
    display: flex;
    justify-content: center;
    width: calc(5vw / 2);
  }

  p {
    color: ${theme.mediumGrey};
    ${font("Spartan", 13, 700)};
    letter-spacing: calc(1rem / 20);
    text-align: center;
  }

  img {
    margin: 0;
    width: auto;
    height: 20px;
  }
`;

const CartIcon = styled.img`
  margin: 0;
  width: auto;
  height: 18px;
`;

export default Nav;

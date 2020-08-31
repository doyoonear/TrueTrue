import React, { Component, useState } from "react";
import styled, { keyframes } from "styled-components";
import NavBanner from "./Nav_Components/NavBanner";
import NavDropDown from "./Nav_Components/NavDropDown";
import {
  MoveCenter,
  FlexRow,
  FlexCenter,
  font,
  theme,
} from "../../Styles/GlobalStyles";

function Nav() {
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const [cartActive, setCartActive] = useState(false);

  const visibleToggle = () => {
    setVisible(!visible);
  };

  const data = ["FREE STUFF", "ABOUT", "BLOG", "GALLERY", "SUPPORT"];

  return (
    <nav>
      <NavWhole>
        {visible && <NavBanner visibleToggle={visibleToggle} />}
        <NavText open={open} visible={visible}>
          <li>
            <span onClick={() => setOpen(!open)}>
              SHOP{" "}
              <DownArrow
                src={
                  open
                    ? "/Images/main_images/down_white.webp"
                    : "/Images/main_images/down.webp"
                }
              />
            </span>
          </li>
          {data.map((el) => {
            return (
              <li>
                <span>{el}</span>
              </li>
            );
          })}
        </NavText>
        <NavBar>
          <img alt="logo" src="/Images/main_images/logo_dark.webp" />
          <Icons>
            <img alt="search icon" src="/Images/main_images/search_icon.webp" />
            <p>$USD</p>
            <img
              alt="account icon"
              src="/Images/main_images/account_icon.svg"
            />
            <Cart
              src={
                cartActive
                  ? "/Images/main_images/cart_active.webp"
                  : "/Images/main_images/cart_icon.svg"
              }
            />
          </Icons>
        </NavBar>
        {open && <NavDropDown />}
      </NavWhole>
    </nav>
  );
}

const NavWhole = styled.nav`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
`;

const NavText = styled.div`
  position: absolute;
  display: flex;
  ${FlexRow};
  ${MoveCenter};
  top: ${({ visible }) => (visible ? "85px" : "35px")};
  left: 25%;
  color: ${(props) => (props.open ? theme.lightGrey : theme.darkGrey)};
  ${font("Spartan", 13, 700)};
  z-index: 10;
  cursor: default;

  li {
    position: relative;
    ${MoveCenter};
    width: 7rem;
    letter-spacing: calc(1rem / 10);

    span {
      &:hover {
        padding: 3px 0;
        margin: -4px 0;
        border-top: 1px solid ${theme.darkGrey};
        border-bottom: 1px solid ${theme.darkGrey};
      }
    }
  }
`;

const DownArrow = styled.img`
  top: 12%;
  right: 12%;
  width: 5px;
  height: 5px;
`;

const Cart = styled.img`
  margin: 0;
  width: auto;
  height: 18px;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 9%;
  background-color: ${theme.darkBeige};

  img {
    margin-left: 25px;
    width: 80px;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 30px;
  width: 160px;

  div {
    display: flex;
    justify-content: center;
    width: calc(5vw / 2);
  }

  p {
    ${font("Spartan", 7.5, 700)};
    letter-spacing: calc(1rem / 20);
    text-align: center;
  }

  img {
    margin: 0;
    width: auto;
    height: 18px;
  }
`;

export default Nav;

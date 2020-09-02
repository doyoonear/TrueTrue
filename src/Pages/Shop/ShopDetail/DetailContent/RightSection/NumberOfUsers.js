import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PackageList from "./PackageList";
import GlobalStyles, { theme } from "../../../../../Styles/GlobalStyles";

function NumberOfUsers({ user, onUser, change, show }) {
  const usersIndex = (idx) => {
    change(idx);
    show();
  };

  return (
    <>
      {user &&
        user.map((v, idx) => {
          return (
            <NumberOfUserss
              key={idx}
              show={onUser}
              onClick={() => usersIndex(idx)}
            >
              {v}
            </NumberOfUserss>
          );
        })}
    </>
  );
}

export default NumberOfUsers;

const NumberOfUserss = styled.div`
  position: relative;
  width: 100%;
  height: 48px;
  padding: 15px;
  top: 27%;
  border: 0.5px solid ${theme.mediumGrey};
  background-color: ${theme.lightBeige};
  z-index: 2;
  display: ${(props) => (props.show ? "block" : "none")};
`;

import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import GlobalStyles, {
  MoveCenter,
  Khand,
  Font,
  theme,
} from "../../../../../Styles/GlobalStyles";

function PackageList({ list, onList, change, show }) {
  const packageIndex = (idx) => {
    change(idx);
    show();
  };

  return (
    <>
      {list &&
        list.map((v, idx) => {
          return (
            <PackageLists show={onList} onClick={() => packageIndex(idx)}>
              {v}
            </PackageLists>
          );
        })}
    </>
  );
}

export default PackageList;

const PackageLists = styled.div`
  position: relative;
  width: 100%;
  height: 48px;
  padding: 15px;
  top: -17%;
  z-index: 1;
  border: 0.5px solid ${theme.mediumGrey};
  background-color: ${theme.lightBeige};
  display: ${(props) => (props.show ? "block" : "none")};
`;

import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productId } from "../../../../../store/actions";
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

  const dispatch = useDispatch();

  return (
    <>
      {list &&
        list.map((v, idx) => {
          return (
            <PackageLists
              show={onList}
              onClick={() => {
                packageIndex(idx);
                dispatch(productId(list[idx].id));
              }}
            >
              {v.name}
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
  z-index: 2;
  border: 0.5px solid ${theme.mediumGrey};
  background-color: ${theme.lightBeige};
  display: ${(props) => (props.show ? "block" : "none")};
`;

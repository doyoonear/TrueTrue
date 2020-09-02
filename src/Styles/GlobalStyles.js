import { css } from "styled-components";

export const MoveCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FlexRow = css`
  flex-direction: row;
`;

export const FlexCenter = css`
  display: flex;
  justify-content: center;
`;

export const font = (name, size, weight) => css`
  font-family: ${name};
  font-size: ${size}px;
  font-weight: ${weight};
  /*Khand, Spartan, Inconsolata*/
`;

export const theme = {
  lightBeige: "#fdf9f2",
  darkBeige: "#eee9e3",
  lightGrey: "#a9a6a0",
  mediumGrey: "#4d4d4d",
  darkGrey: "#2d2d2d",
};

/* eslint-disable max-len */
import { Grid } from "./Grid";
import { LayoutProps, FlexboxProps, BorderProps, MarginProps, ColorProps } from "styled-system";

export type GridProps = LayoutProps & FlexboxProps & BorderProps & MarginProps & ColorProps

Grid.defaultProps = {
  flexWrap: "wrap",
  display: "flex",
  width: 1,
  flexDirection: "column",
  boxSizing: "border-box"
};

export { Grid };

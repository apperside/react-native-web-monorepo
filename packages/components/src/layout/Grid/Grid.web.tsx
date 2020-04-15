/* eslint-disable max-len */
import shouldForwardProp from "@styled-system/should-forward-prop";
import styled from "styled-components";
import { border, color, flex, flexbox, layout, margin } from "styled-system";
import { GridProps } from "./Grid";

export const Grid = styled.div.withConfig<GridProps>({ shouldForwardProp })<GridProps>(
  layout,
  flexbox,
  border,
  flex,
  margin,
  color,
  {
    boxSizing: "border-box"
  }
);

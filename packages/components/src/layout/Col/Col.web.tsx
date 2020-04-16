import * as React from "react";
import styled from "styled-components";
import { border, BorderProps, color, flexbox, FlexboxProps, layout, margin, MarginProps, space, SpaceProps, LayoutProps, ColorProps } from "styled-system";
import { ColProps } from "./Col";
import shouldForwardProp from "@styled-system/should-forward-prop";

export const Col = styled.div.withConfig<ColProps>({ shouldForwardProp })<ColProps>(
  flexbox,
  border,
  space,
  margin,
  layout,
  color,
  {
    boxSizing: "border-box",
    borderStyle: "solid"
  }
);

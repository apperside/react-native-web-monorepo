import * as React from "react";
import styled from "styled-components/native";
import { border, BorderProps, color, flexbox, FlexboxProps, layout, margin, MarginProps, space, SpaceProps, LayoutProps, ColorProps } from "styled-system";

import shouldForwardProp from "@styled-system/should-forward-prop";

export type ColProps = FlexboxProps
  & BorderProps
  & SpaceProps
  & MarginProps
  & LayoutProps
  & ColorProps

export const Col = styled.View.withConfig<ColProps>({ shouldForwardProp })<ColProps>(
  flexbox,
  border,
  space,
  margin,
  layout,
  color
);

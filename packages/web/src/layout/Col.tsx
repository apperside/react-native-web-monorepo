import * as React from "react";
import styled from "styled-components/native";
import { border, BorderProps, color, flexbox, FlexboxProps, layout, margin, MarginProps, space, SpaceProps } from "styled-system";
import { LayoutProps } from "styled-system";
import { ColorProps } from "styled-system";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { width } from "styled-system";

type ColProps = FlexboxProps
  & BorderProps
  & SpaceProps
  & MarginProps
  & LayoutProps
  & ColorProps

export const Col = styled.View<ColProps>(
  flexbox,
  border,
  space,
  margin,
  layout,
  width,
  color,
  {
    boxSizing: "border-box"
  }
);

export const FlexCol: React.FC<ColProps> = props => {

  return <Col display="flex"
    {...props} />;
};
//alias for FlexCol, since flex-row is default
export const HCol = FlexCol;

export const VCol: React.FC<ColProps> = props => {
  return <FlexCol flexDirection="column"
    {...props} />;
};


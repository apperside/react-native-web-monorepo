import React from "react";
import { BackgroundProps, BorderProps, ColorProps, FlexboxProps, LayoutProps, MarginProps, PositionProps, SpaceProps } from "styled-system";
import { Box } from "./Box";

export type BoxProps = LayoutProps
  & FlexboxProps
  & BorderProps
  & SpaceProps
  & MarginProps
  & ColorProps
  & BackgroundProps
  & PositionProps

const FlexBox: React.FC<BoxProps> = props => {
  return <Box display="flex"
    flexDirection="row"
    {...props} />;
};

const VFlexBox: React.FC<BoxProps> = props => {
  return <FlexBox flexDirection="column"
    {...props} />;
};

export { Box, FlexBox, VFlexBox };

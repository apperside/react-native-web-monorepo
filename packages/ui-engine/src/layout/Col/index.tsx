import React from "react";
import { Col, ColProps } from "./Col";

export { Col };

export const FlexCol: React.FC<ColProps> = props => {
  return <Col display="flex"
    {...props} />;
};
// alias for FlexCol, since flex-row is default
export const HCol = FlexCol;

export const VCol: React.FC<ColProps> = props => {
  return <FlexCol flexDirection="column"
    {...props} />;
};

import React from "react";
import { Box } from "../Box";

const Col = Box;

Col.defaultProps = {
  boxSizing: "border-box"
};

export { Col };
export const FlexCol: React.FC<ColProps> = props => {
  return <Col display="flex"
    {...props} />;
};
// alias for FlexCol, since flex-row is default
export const HCol: React.FC<ColProps> = props => {
  return <FlexCol
    flexDirection="horizontal"
    {...props} />;
};

export const VCol: React.FC<ColProps> = props => {
  return <FlexCol flexDirection="column"
    {...props} />;
};

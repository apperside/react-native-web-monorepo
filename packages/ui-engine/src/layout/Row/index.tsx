import { LayoutProps, FlexboxProps, BordersProps, SpaceProps } from "styled-system";

import { Box } from "../Box";

const Row = Box;

Row.defaultProps = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  flexWrap: "wrap"
};

export { Row };

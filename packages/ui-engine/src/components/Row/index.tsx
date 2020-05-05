import { BoxProps } from "../Box";
import { Row } from "./Row";

export type RowProps = BoxProps;

Row.defaultProps = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  flexWrap: "wrap"
};

export { Row };

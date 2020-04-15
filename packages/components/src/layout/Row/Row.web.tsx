/* eslint-disable max-len */
import shouldForwardProp from "@styled-system/should-forward-prop";
import styled from "styled-components";
import { border, flex, flexbox, layout, space } from "styled-system";
import { RowProps } from "./Row";

export const Row = styled.div.withConfig<RowProps>({ shouldForwardProp })<RowProps>(
  layout,
  flexbox,
  border,
  flex,
  space,
  {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap"
  }
);

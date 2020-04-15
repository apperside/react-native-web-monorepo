/* eslint-disable max-len */
import styled from "styled-components/native";
import { border, BorderProps, flex, flexbox, FlexboxProps, layout, LayoutProps, space, SpaceProps } from "styled-system";
import shouldForwardProp from "@styled-system/should-forward-prop";

export type RowProps = LayoutProps & FlexboxProps & BorderProps
  & SpaceProps;
export const Row = styled.View.withConfig<RowProps>({ shouldForwardProp })<RowProps>(
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

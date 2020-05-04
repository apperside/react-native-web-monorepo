/* eslint-disable max-len */
import styled from "styled-components/native";
import { borders, BordersProps, flex, flexbox, FlexboxProps, layout, LayoutProps, space, SpaceProps } from "styled-system";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { RowProps } from ".";

export const Row = styled.View.withConfig<RowProps>({ shouldForwardProp })<RowProps>(
  layout,
  flexbox,
  borders,
  flex,
  space
);

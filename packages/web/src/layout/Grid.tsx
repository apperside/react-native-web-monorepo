/* eslint-disable max-len */
import * as React from "react";
import styled from "styled-components/native";
import { border, BorderProps, flex, flexbox, FlexboxProps, layout, LayoutProps, margin, MarginProps } from "styled-system";

type GridProps = LayoutProps & FlexboxProps & BorderProps & MarginProps
const GridComp = styled.View<GridProps>`
    ${layout}
    ${flexbox}
    ${border}
    ${flex}
    ${margin}
`;

export const Grid: React.FC<GridProps> = (props) => {
  return <GridComp flexWrap="wrap"
    display="flex"
    width={1}
    flexDirection="row"
    {...props}>{props.children}</GridComp>;
};


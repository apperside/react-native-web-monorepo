/* eslint-disable max-len */
import shouldForwardProp from "@styled-system/should-forward-prop";
import styled from "styled-components/native";
import { border, BorderProps, color, ColorProps, flex, flexbox, FlexboxProps, layout, LayoutProps, margin, MarginProps } from "styled-system";

export type GridProps = LayoutProps & FlexboxProps & BorderProps & MarginProps & ColorProps
const Grid = styled.View.withConfig<GridProps>({ shouldForwardProp }) <GridProps>`
    ${layout}
    ${flexbox}
    ${border}
    ${flex}
    ${margin}
    ${color}
`;

export { Grid };

/* eslint-disable max-len */
import shouldForwardProp from "@styled-system/should-forward-prop";
import styled from "styled-components/native";
import { border, color, flex, flexbox, layout, margin } from "styled-system";
import { GridProps } from ".";

const Grid = styled.View.withConfig<GridProps>({ shouldForwardProp }) <GridProps>`
    ${layout}
    ${flexbox}
    ${border}
    ${flex}
    ${margin}
    ${color}
`;

export { Grid };

import shouldForwardProp from "@styled-system/should-forward-prop";
import styled from "styled-components";
import { background, border, color, flexbox, layout, margin, position, space } from "styled-system";
import { BoxProps } from ".";

export const Box = styled.div.withConfig<BoxProps>({
  shouldForwardProp
}) <BoxProps>`
    ${layout}
    ${flexbox}
    ${border}
    ${space}
    ${margin}
    ${color}
    ${background}
    ${position}
`;

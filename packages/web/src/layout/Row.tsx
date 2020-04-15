/* eslint-disable max-len */
import styled from "styled-components/native";
import { border, BorderProps, flex, flexbox, FlexboxProps, layout, LayoutProps, space, SpaceProps } from "styled-system";


type RowProps = LayoutProps & FlexboxProps & BorderProps
  & SpaceProps
const RowComp = styled.View<RowProps>`
    ${layout}
    ${flexbox}
    ${border}
    ${flex}
    ${space}
`;

export const Row = styled(RowComp)(props => {
  return ({
    display: "flex",
    fledirection: "row",
    width: "100%",
    flexWrap: "wrap",
    ...props as any
  });
});


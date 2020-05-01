import { Col, Grid, Row } from "@apperside/ui-engine/src/layout";
import { ThemedComponentWithVariants } from "@apperside/ui-engine/src/theme";
import React from "react";
import { DefaultTheme } from "styled-components";
import { Theme } from "styled-system";
import { ButtonProps } from "./components/button";
import { Text, TypographyComponentProps as MYTypographyProps, TypographyVariants } from "./components/typography";
export { Text, Col, Grid, Row };
declare module "styled-components" {
    interface DefaultTheme extends Theme {
        typography: ThemedComponentWithVariants<MYTypographyProps, TypographyVariants>;
        textInput: ThemedComponentWithVariants<MYTypographyProps, TypographyVariants>;
        button: ButtonProps;
    }
}
export declare const appTheme: DefaultTheme;
export declare const App: React.FC;

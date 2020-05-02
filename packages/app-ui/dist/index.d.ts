import { Col, Grid, Row } from "@apperside/ui-engine/src/layout";
import { ThemedComponentWithVariants } from "@apperside/ui-engine/src/theme";
import React from "react";
import { DefaultTheme } from "styled-components";
import { Theme } from "styled-system";
import { ButtonProps, ButtonVariants } from "./components/button";
import { Text, TypographyComponentProps as MYTypographyProps, TypographyVariants } from "./components/typography";
import "./index.web.scss";
export { Text, Col, Grid, Row };
declare module "styled-components" {
    interface DefaultTheme extends Theme {
        typographyStyles: ThemedComponentWithVariants<MYTypographyProps, TypographyVariants>;
        textInput: ThemedComponentWithVariants<MYTypographyProps, TypographyVariants>;
        button: ThemedComponentWithVariants<ButtonProps, ButtonVariants>;
    }
}
export declare const appTheme: DefaultTheme;
export declare const App: React.FC;

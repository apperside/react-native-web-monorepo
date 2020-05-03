import { Col, Grid, Row } from "@apperside/ui-engine/src/layout";
import { ThemedComponentWithVariants } from "@apperside/ui-engine/src/theme";
import React from "react";
import { DefaultTheme } from "styled-components";
import { Theme } from "styled-system";
import { ButtonProps } from "./components/button";
import { ButtonVariants } from "./components/button/Button.theme";
import { TextInputProps, TextInputVariants } from "./components/textinput";
import { TypographyComponentProps as MYTypographyProps, TypographyVariants } from "./components/typography";
export { Col, Grid, Row };
declare module "styled-components" {
    interface DefaultTheme extends Theme {
        typographyStyles: ThemedComponentWithVariants<MYTypographyProps, TypographyVariants>;
        textInput: ThemedComponentWithVariants<TextInputProps, TextInputVariants>;
        button: ThemedComponentWithVariants<ButtonProps, ButtonVariants>;
    }
}
export declare const appTheme: DefaultTheme;
export declare const App: React.FC;

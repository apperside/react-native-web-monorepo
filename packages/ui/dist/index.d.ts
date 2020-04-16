import { ThemedComponentWithVariants } from "components/src/theme";
import React from "react";
import { DefaultTheme } from "styled-components";
import { Theme } from "styled-system";
import { ButtonProps } from "./components/button";
import { TypographyComponentProps as MYTypographyProps, TypographyVariants } from "./components/typography";
export declare type PropsWithVariant<T> = {
    variant?: T;
};
declare module "styled-components" {
    interface DefaultTheme extends Theme {
        typography?: ThemedComponentWithVariants<MYTypographyProps, TypographyVariants>;
        button?: ButtonProps;
    }
}
export declare const appTheme: DefaultTheme;
export declare const App: React.FC;

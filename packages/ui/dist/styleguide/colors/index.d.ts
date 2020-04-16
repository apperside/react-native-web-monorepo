import { ThemeColors } from "styled-system";
declare module "styled-system" {
    interface ThemeColors {
        primary: string;
        secondary: string;
        secondaryLight: string;
        secondaryDark: string;
        ctaButton1: string;
        ctaButton1Hover: string;
        ctaButton2: string;
        ctaButton2Hover: string;
        link: string;
        success: string;
        warning: string;
        error: string;
        heading: string;
        headerLinks: string;
        cta: string;
        text: string;
        disabled: string;
        footer: string;
        darkGrayBorder: string;
        headerBackground: string;
        grayLight: string;
        grayMedium: string;
        grayDark: string;
        prova: {
            prova1: string;
        };
    }
}
export declare const themeColors: ThemeColors;
/**
 * These types are to be used in place of
 * styled-system's ColorProps, TextColorProps, BackgroundColorProps
 */

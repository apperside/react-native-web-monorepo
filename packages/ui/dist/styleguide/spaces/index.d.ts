import { ThemeSpaces } from "styled-system";
declare module "styled-system" {
    interface ThemeSpaces {
        NONE: number;
        XS: number;
        S: number;
        M: number;
        L: number;
        XL: number;
        XXL: number;
        DESKTOP_MAIN_PADDING: number | string;
        DESKTOP_LOW_PADDING: number | string;
        DESKTOP_LARGE_MAIN_PADDING: number | string;
        TABLET_MAIN_PADDING: number | string;
        MOBILE_MAIN_PADDING: number | string;
    }
}
export declare const spacesMap: ThemeSpaces;

import { ThemeBorders, ThemeBorderWidths } from "styled-system";
declare module "styled-system" {
    interface ThemeBorders {
        redThin: string;
        redTick: string;
    }
    interface ThemeBorderWidths {
        thinerBorder: number;
        thinBorder: number;
        tickBorder: number;
        [key: string]: number;
    }
}
export declare const themeBordersMap: ThemeBorders;
export declare const themeBorderWidthsMap: ThemeBorderWidths;

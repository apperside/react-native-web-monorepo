import { ThemeBreakpoints } from "styled-system";
declare module "styled-system" {
    interface ThemeBreakpoints {
        default: number | string;
        mobileM: number | string;
        mobileL: number | string;
        tablet: number | string;
        desktopLow: number | string;
        desktopMid: number | string;
        desktop: number | string;
        desktopLarge: number | string;
    }
}
/**
 * The logic is mobile first, so the first breakpoint is alway from 0 to the first declared one
 */
export declare const breakpointsMap: ThemeBreakpoints;
export default breakpointsMap;

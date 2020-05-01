import { ThemeSizes } from "styled-system";
/**
 * Values used for
 *
 * width, height, minWidth, maxWidth, minHeight, maxHeight, size
 */
declare module "styled-system" {
    interface ThemeSizes {
        HEADER_DESKTOP: number;
        HEADER_MOBILE: number;
    }
}
export declare const sizesMap: ThemeSizes;

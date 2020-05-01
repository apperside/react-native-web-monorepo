import { ThemeSpaces } from "styled-system";

declare module "styled-system" {

  export interface ThemeSpaces {
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

export const spacesMap: ThemeSpaces = {
  NONE: 0,
  XS: 2,
  S: 4,
  M: 8,
  L: 16,
  XL: 32,
  XXL: 64,
  DESKTOP_MAIN_PADDING: "130px",
  DESKTOP_LOW_PADDING: "118px",
  DESKTOP_LARGE_MAIN_PADDING: "170px",
  TABLET_MAIN_PADDING: "110px",
  MOBILE_MAIN_PADDING: 25
};

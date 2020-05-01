import { ThemeBorders, ThemeBorderWidths } from "styled-system";
declare module "styled-system" {

  export interface ThemeBorders {
    redThin: string,
    redTick: string,
    // [key: string]: string
  }

  export interface ThemeBorderWidths {
    thinerBorder: number
    thinBorder: number
    tickBorder: number,
    [key: string]: number
  }
}

export const themeBordersMap: ThemeBorders = {
  redThin: "2px solid red",
  redTick: "10px solid red"
};

export const themeBorderWidthsMap: ThemeBorderWidths = {
  thinerBorder: 1,
  thinBorder: 2,
  tickBorder: 4
};

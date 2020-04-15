import { ObjectOrArray, ThemeBorders, ThemeBorderWidths } from "styled-system";
import * as CSS from "csstype";
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

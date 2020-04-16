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

export const themeBordersMap: ThemeBorders = {
  redThin: "2px solid red",
  redTick: "10px solid red"
};

export const themeBorderWidthsMap: ThemeBorderWidths = {
  thinerBorder: 1,
  thinBorder: 2,
  tickBorder: 4
};

export const borders: ObjectOrArray<CSS.BorderProperty<any>, keyof ThemeBorders> = [];

Object.keys(themeBordersMap).forEach((borderKey) => {
  // borders.push(themeBordersMap[borderKey]);
  // aliases
  borders[borderKey] = themeBordersMap[borderKey];
});

export const borderWidths: ObjectOrArray<CSS.BorderWidthProperty<any>, keyof ThemeBorderWidths> = [];

Object.keys(themeBorderWidthsMap).forEach((borderWidthKey) => {
  borderWidths.push(themeBorderWidthsMap[borderWidthKey]);
  // aliases
  borderWidths[borderWidthKey] = themeBorderWidthsMap[borderWidthKey];
});

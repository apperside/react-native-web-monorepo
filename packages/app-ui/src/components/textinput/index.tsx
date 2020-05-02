import { ThemedComponentWithVariants } from "@apperside/ui-engine/src/theme";
import { BackgroundImageProps, BorderRadiusProps, BorderProps, ColorProps, FontFamilyProps, SpaceProps, TextStyleProps, ThemeFontFamilies, ThemeFontSizes, TypographyProps as SSTypographyProps, WidthProps } from "styled-system";
import { TextInput } from "./TextInput";

export type TextInputVariants = "primary" | "secondary"

export type TextInputProps =
  & SSTypographyProps
  & SpaceProps
  & WidthProps
  & ColorProps
  & BackgroundImageProps
  & TextStyleProps
  & FontFamilyProps
  & BorderRadiusProps
  & FontFamilyProps
  & BorderProps
  & {
    // utility prop to apply bold fontWeight
    bold?: boolean,
    // TODO: allow only valid html tag names
    as?: any
    variant?: TextInputVariants
  }
TextInput.defaultProps = { variant: "primary" };
export default TextInput;

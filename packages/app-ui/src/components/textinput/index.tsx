import { BackgroundImageProps, BorderProps, BorderRadiusProps, ColorProps, FontFamilyProps, LayoutProps, SpaceProps, TextStyleProps, TypographyProps as SSTypographyProps, WidthProps } from "styled-system";
import { appTheme } from "../..";
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
  & LayoutProps
  & {
    // utility prop to apply bold fontWeight
    bold?: boolean,
    // TODO: allow only valid html tag names
    as?: any
    variant?: TextInputVariants
    value?: any
  };
TextInput.defaultProps = { ...appTheme.textInput, variant: "primary" };

export default TextInput;

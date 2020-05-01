import * as CSS from "csstype";
import styled, { DefaultTheme } from "styled-components/native";
import { background, BackgroundImageProps, borderRadius, BorderRadiusProps, color, ColorProps, fontFamily, FontFamilyProps, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, size, space, SpaceProps, textAlign, textStyle, TextStyleProps, TypographyProps as SSTypographyProps, variant, width, WidthProps } from "styled-system";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { TypographyComponentProps } from ".";

// eslint-disable-next-line max-len
// const variants = (theme: DefaultTheme): { variants: TypographyVariantsConfig } => ({ variants: theme.typography.variants });
export const TextSpecs = styled.Text<TypographyComponentProps>(
  space,
  fontSize,
  fontStyle,
  size,
  color,
  textStyle,
  letterSpacing,
  fontFamily,
  fontWeight,
  borderRadius,
  lineHeight,
  textAlign,
  background,
  width
  // props => variant(variants(props.theme))
);
// @ts-ignore

TextSpecs.defaultProps = {
  variant: "H1"
};
export const Text = styled(TextSpecs).withConfig<TypographyComponentProps>({
  // avoid forwarding styled-system's props to dom
  shouldForwardProp
}).attrs<TypographyComponentProps>(({ theme, variant, bold, as, ...other }) => {
  console.log("variant is", theme);
  return ({
    // @ts-ignore
    ...theme.typographyVariants?.[variant],
    ...other,
    style: { fontWeight: bold ? "bold" : undefined }
  });
})<TypographyComponentProps>(({ theme }) => ({
  // ":hover": { ...theme.button?.hover || {} },
  // ":disabled": { ...theme.button?.disabled, ...theme.button?.[variant]?.disabled }
}));

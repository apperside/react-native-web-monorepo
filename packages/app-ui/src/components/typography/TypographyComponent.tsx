import shouldForwardProp from "@styled-system/should-forward-prop";
import styled from "styled-components/native";
import { background, borderRadius, variant, color, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, size, space, textAlign, textStyle, width } from "styled-system";
import { TypographyComponentProps } from ".";

// eslint-disable-next-line max-len
// const variants = (theme: DefaultTheme): { variants: TypographyVariantsConfig } => ({ variants: theme.typography.variants });
export const Text = styled.Text.withConfig<TypographyComponentProps>({
  // avoid forwarding styled-system's props to dom
  shouldForwardProp
})<TypographyComponentProps>(
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
  width,
  props => variant({
    variants: props.theme.typographyStyles.variants
  })
);
// @ts-ignore
Text.defaultProps = {
  variant: "HERO"
};

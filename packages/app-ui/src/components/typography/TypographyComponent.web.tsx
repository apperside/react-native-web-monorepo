import shouldForwardProp from "@styled-system/should-forward-prop";
import styled from "styled-components";
import { background, borderRadius, variant, color, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, size, space, textAlign, textStyle, width, border } from "styled-system";
import { TypographyComponentStyleProps } from ".";

// eslint-disable-next-line max-len
// const variants = (theme: DefaultTheme): { variants: TypographyVariantsConfig } => ({ variants: theme.typography.variants });
const Text = styled.div.withConfig<TypographyComponentStyleProps>({
  // avoid forwarding styled-system's props to dom
  shouldForwardProp
})<TypographyComponentStyleProps>(
  space,
  fontSize,
  fontStyle,
  size,
  color,
  textStyle,
  letterSpacing,
  fontFamily,
  fontWeight,
  border,
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
  variant: "regular"
};
export default Text;

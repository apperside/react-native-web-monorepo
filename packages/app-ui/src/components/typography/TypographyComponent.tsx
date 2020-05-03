import shouldForwardProp from "@styled-system/should-forward-prop";
import styled from "styled-components/native";
import { background, borderRadius, variant, flexbox, color, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, size, space, textAlign, textStyle, width } from "styled-system";
import { TypographyComponentProps } from ".";

const Text = styled.Text.withConfig<TypographyComponentProps>({
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
  flexbox,
  width,
  props => variant({
    variants: props.theme.typographyStyles.variants
  })
);

export default Text;

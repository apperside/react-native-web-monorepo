import shouldForwardProp from "@styled-system/should-forward-prop";
import styled from "styled-components";
import { background, borderRadius, layout, variant, color, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, size, space, textAlign, textStyle, width } from "styled-system";
import { TextInputProps } from ".";

export const TextInput = styled.input.withConfig<TextInputProps>({
  // avoid forwarding styled-system's props to dom
  shouldForwardProp
})<TextInputProps>(
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
  layout,
  lineHeight,
  textAlign,
  background,
  width,
  props => variant({
    variants: props.theme.textInput.variants
  })
);

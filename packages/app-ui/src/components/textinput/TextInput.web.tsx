import shouldForwardProp from "@styled-system/should-forward-prop";
import styled from "styled-components";
import { background, borderRadius, layout, variant, color, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, size, space, textAlign, textStyle, width } from "styled-system";
import { TextInputStyleProps, TextInputVariants } from ".";
import { WithVariant } from "../..";
import { textInputTheme } from "./TextInput.theme";

type Props = WithVariant<TextInputStyleProps, TextInputVariants>

export const TextInput = styled.input.withConfig<Props>({
  // avoid forwarding styled-system's props to dom
  shouldForwardProp
})<Props>(
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

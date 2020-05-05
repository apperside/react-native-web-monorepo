import shouldForwardProp from "@styled-system/should-forward-prop";
import styled from "styled-components/native";
import { background, borderRadius, variant, layout, flexbox, color, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, size, space, textAlign, textStyle, width } from "styled-system";
import { TextInputStyleProps, TextInputVariants } from ".";
import { WithVariant } from "../..";
import { textInputTheme } from "./TextInput.theme";

type Props = WithVariant<TextInputStyleProps, TextInputVariants>
// eslint-disable-next-line max-len
// const variants = (theme: DefaultTheme): { variants: TypographyVariantsConfig } => ({ variants: theme.typography.variants });
export const TextInput = styled.TextInput.withConfig<Props>({
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
  lineHeight,
  textAlign,
  background,
  flexbox,
  layout,
  width,
  props => variant({
    variants: props.theme.textInput.variants
  })
);

import shouldForwardProp from "@styled-system/should-forward-prop";
import styled from "styled-components";
import { background, border, borderRadius, color, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, size, space, textAlign, textStyle, width } from "styled-system";
import { TextInputProps } from ".";

export const TextSpecs = styled.input<TextInputProps>(
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
  border
);

export const TextInput = styled(TextSpecs).withConfig<TextInputProps>({
  // avoid forwarding styled-system's props to dom
  shouldForwardProp
}).attrs<TextInputProps>(({ theme, variant, bold, as, ...other }) => {
  return ({
    ...theme.textInput?.variants?.[variant || "primary"],
    ...other,
    style: { fontWeight: bold ? "bold" : undefined }
  });
})<TextInputProps>(({ theme }) => ({
}));

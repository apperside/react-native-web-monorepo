import shouldForwardProp from "@styled-system/should-forward-prop";
import styled from "styled-components/native";
import { background, borderRadius, variant, color, border, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, size, space, textAlign, textStyle, width } from "styled-system";
import { TypographyComponentProps } from "../typography";
import { TextInputProps } from ".";

export const TextSpecs = styled.TextInput<TextInputProps>(
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
  border,
  width,
  props => variant({
    variants: props.theme.textInput.variants
  })
);

export const TextInput = styled(TextSpecs).withConfig<TextInputProps>({
  // avoid forwarding styled-system's props to dom
  shouldForwardProp
}).attrs<TextInputProps>(({ theme, variant, bold, as, ...other }) => {
  console.log("variant is", theme.typographyStyles?.variants?.[variant || "primary"]);
  return ({
    ...theme.textInput,
    ...other,
    style: { fontWeight: bold ? "bold" : undefined }
  });
})<TextInputProps>(({ theme }) => ({
}));

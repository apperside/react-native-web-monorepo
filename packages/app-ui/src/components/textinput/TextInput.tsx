import shouldForwardProp from "@styled-system/should-forward-prop";
import styled from "styled-components/native";
import { background, borderRadius, color, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, size, space, textAlign, textStyle, width } from "styled-system";
import { TextInputProps } from ".";

// eslint-disable-next-line max-len
// const variants = (theme: DefaultTheme): { variants: TypographyVariantsConfig } => ({ variants: theme.typography.variants });
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
  width
  // props => variant(variants(props.theme))
);
// @ts-ignore

TextSpecs.defaultProps = {
  variant: "H1"
};
export const TextInput = styled(TextSpecs).withConfig<TextInputProps>({
  // avoid forwarding styled-system's props to dom
  shouldForwardProp
}).attrs<TextInputProps>(({ theme, variant, bold, as, ...other }) => {
  console.log("variant is", theme);
  return ({
    // @ts-ignore
    ...theme.typographyVariants?.[variant],
    ...other,
    style: { fontWeight: bold ? "bold" : undefined }
  });
})<TextInputProps>(({ theme }) => ({
  // ":hover": { ...theme.button?.hover || {} },
  // ":disabled": { ...theme.button?.disabled, ...theme.button?.[variant]?.disabled }
}));

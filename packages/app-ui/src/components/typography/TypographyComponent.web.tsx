import shouldForwardProp from "@styled-system/should-forward-prop";
import styled from "styled-components";
import { background, borderRadius, color, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, size, space, textAlign, textStyle, width } from "styled-system";
import { TypographyComponentProps } from ".";

// eslint-disable-next-line max-len
// const variants = (theme: DefaultTheme): { variants: TypographyVariantsConfig } => ({ variants: theme.typography.variants });
export const TextSpecs = styled.div<TypographyComponentProps>(
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
  variant: ""
};
export const Text = styled(TextSpecs).withConfig<TypographyComponentProps>({
  // avoid forwarding styled-system's props to dom
  shouldForwardProp
}).attrs<TypographyComponentProps>(({ theme, variant, bold, as, ...other }) => {
  console.log("variant is", theme.typographyStyles?.variants?.[variant || "HERO"]);
  return ({
    ...theme.typographyStyles?.variants?.[variant || "HERO"],
    // variant: variant,
    ...other,
    style: { fontWeight: bold ? "bold" : undefined }
  });
})<TypographyComponentProps>(({ theme }) => ({
  // ":hover": { ...theme.button?.hover || {} },
  // ":disabled": { ...theme.button?.disabled, ...theme.button?.[variant]?.disabled }
}));

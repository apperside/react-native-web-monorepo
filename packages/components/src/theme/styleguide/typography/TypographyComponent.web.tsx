import * as CSS from "csstype";
import styled, { DefaultTheme } from "styled-components";
import { background, BackgroundImageProps, borderRadius, BorderRadiusProps, color, ColorProps, fontFamily, FontFamilyProps, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, size, space, SpaceProps, textAlign, textStyle, TextStyleProps, TypographyProps as SSTypographyProps, variant, width, WidthProps } from "styled-system";
import { PropsWithVariant } from "../..";
import shouldForwardProp from "@styled-system/should-forward-prop";

export type TypographyVariants = "HERO" |
  "H1" |
  "H2" |
  "H3" |
  "H4" |
  "P0" |
  "P1" |
  "P2" |
  "P3" |
  "MENU" |
  "FOOTER" |
  "CTA";

export type TypographyProps =
  & SSTypographyProps
  & SpaceProps
  & WidthProps
  & ColorProps
  & BackgroundImageProps
  & TextStyleProps
  & FontFamilyProps
  & BorderRadiusProps
  & FontFamilyProps
  & {
    // utility prop to apply bold fontWeight
    bold?: boolean,
    // TODO: allow only valid html tag names
    as?: any
  } &
  PropsWithVariant<TypographyVariants>;

// export type VariantsProps<Props extends PropsWithVariant<any>, Variants extends string> =
//     { [key in Variants]: Props & { [key in CSS.Pseudos]?: Omit<Props, "variant"> } }

export type TypographyVariantsConfig = { [key in TypographyVariants]: TypographyProps & { [key in CSS.Pseudos]?: Omit<TypographyProps, "variant"> } }

export const typografyVariants: TypographyVariantsConfig = {
  HERO: {
    fontSize: {
      default: "1rem",
      tablet: "1.5rem",
      desktop: "2rem"
    },
    color: "red",
    fontWeight: "bold",
    // fontFamily: "heading",
    lineHeight: {
      default: 1.36,
      tablet: 1.44,
      desktop: 1.44
    }
  },
  H1: {
    fontSize: {
      default: 20,
      tablet: 24,
      desktop: 24
    },
    color: "white",
    fontWeight: "bold",
    // fontFamily: "heading",
    lineHeight: {
      default: 1.3,
      tablet: 1.33,
      desktop: 1.33
    }
  },
  H2: {
    fontSize: {
      default: 16,
      tablet: 24,
      desktop: 20
    },
    fontWeight: 700,
    // fontFamily: "heading",
    lineHeight: {
      default: 1.38,
      tablet: 1.2,
      desktop: 1.2
    }
  },
  H3: {
    fontSize: 18,
    fontWeight: 700,
    color: "primary",
    // fontFamily: "heading",
    lineHeight: 1.33
  },
  H4: {
    fontSize: 16,
    fontWeight: 700,
    color: "primary",
    // fontFamily: "heading",
    lineHeight: 1.33
  },
  P0: {
    fontSize: {
      default: 18,
      tablet: 40,
      desktop: 40
    },
    // fontFamily: "body",
    lineHeight: 1.25
  },
  P1: {
    fontSize: {
      default: 18,
      tablet: 22,
      desktop: 22
    },
    // fontFamily: "body",
    lineHeight: 1.36
  },
  P2: {
    fontSize: {
      default: 14,
      tablet: 18,
      desktop: 18
    },
    // fontFamily: "body",
    lineHeight: 1.33
  },
  P3: {
    fontSize: 14,
    fontWeight: 300,
    // fontFamily: "body",
    lineHeight: 1.29
  },
  MENU: {
    fontSize: {
      default: 12,
      tablet: 14,
      desktop: 14
    },
    // fontFamily: "body",
    lineHeight: 1.71
  },
  FOOTER: {
    fontWeight: 700,
    color: "footer",
    fontSize: {
      default: 14,
      tablet: 18
    },
    // fontFamily: "body",
    lineHeight: 1.33
  },
  CTA: {
    color: "black",
    fontSize: 14,
    // fontFamily: "bold",
    lineHeight: 1.71
  }
};

// eslint-disable-next-line max-len
// const variants = (theme: DefaultTheme): { variants: TypographyVariantsConfig } => ({ variants: theme.typography.variants });
export const TextSpecs = styled.div<TypographyProps>(
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
export const TheDiv = styled("div")({
  width: 100,
  height: 100,
  border: "1px solid red"
});
TextSpecs.defaultProps = {
  variant: "H1"
};
export const Text = styled(TextSpecs).withConfig<TypographyProps>({
  // avoid forwarding styled-system's props to dom
  shouldForwardProp
}).attrs<TypographyProps>(({ theme, variant, bold, as, ...other }) => {
  console.log("variant is", theme);
  return ({
    ...theme.typography?.variants[variant || "H1"],
    variant: variant,
    ...other,
    style: { fontWeight: bold ? "bold" : undefined }
  });
})<TypographyProps>(({ theme }) => ({
  // ":hover": { ...theme.button?.hover || {} },
  // ":disabled": { ...theme.button?.disabled, ...theme.button?.[variant]?.disabled }
}));
// export const Text = styled(TextSpecs).withConfig<TypographyProps>({
//   // avoid forwarding styled-system's props to dom
//   shouldForwardProp
// }).attrs<TypographyProps>(({ theme, variant, bold, ...other }) => {
//   console.log("variant is", theme);
//   return ({
//     ...theme.typography.variants[variant || "H1"],
//     ...other,
//     style: { fontWeight: bold ? "bold" : undefined }
//   });
// })<TypographyProps>(({ theme }) => ({
//   // ":hover": { ...theme.button?.hover || {} },
//   // ":disabled": { ...theme.button?.disabled, ...theme.button?.[variant]?.disabled }
// }));


import { ThemedComponentWithVariants } from "@apperside/ui-engine/src/theme";
import { TypographyComponentProps, TypographyVariants } from ".";
export const typographyTheme: ThemedComponentWithVariants<TypographyComponentProps, TypographyVariants> = {
  variants: {
    HERO: {
      fontSize: 25,
      // color: "red",
      // fontWeight: "bold",
      fontFamily: "black"
    },
    H1: {
      fontSize: 20,
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
      fontSize: 16,
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
      fontSize: 18,
      fontFamily: "regular",
      lineHeight: 1.25
    },
    P1: {
      fontSize: 18,
      fontFamily: "regular",
      lineHeight: "18px"
    },
    P2: {
      fontSize: 18,
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
      fontSize: 12,
      // fontFamily: "body",
      lineHeight: 1.71
    },
    FOOTER: {
      fontWeight: 700,
      color: "footer",
      fontSize: 14,
      // fontFamily: "body",
      lineHeight: 1.33
    },
    CTA: {
      color: "black",
      fontSize: 14,
      // fontFamily: "bold",
      lineHeight: 1.71
    }
  }
};

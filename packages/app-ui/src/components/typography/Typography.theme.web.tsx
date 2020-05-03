
import { ThemedComponentWithVariants } from "@apperside/ui-engine/src/theme";
import { TypographyComponentProps, TypographyVariants } from ".";
export const typographyTheme: ThemedComponentWithVariants<TypographyComponentProps, TypographyVariants> = {
  variants: {
    regular: {
      fontSize: {
        default: 10,
        tablet: 20,
        desktop: 30
      },
      // color: "red",
      // fontWeight: "bold",
      fontFamily: "regular",
      lineHeight: {
        default: 1.36,
        tablet: 1.44,
        desktop: 1.44
      }
    },
    black: {
      fontSize: {
        default: 20,
        tablet: 24,
        desktop: 24
      },
      color: "white",
      // fontWeight: "bold",
      fontFamily: "black",
      lineHeight: {
        default: 1.3,
        tablet: 1.33,
        desktop: 1.33
      }
    },
    bold: {
      fontSize: {
        default: 16,
        tablet: 24,
        desktop: 20
      },
      // fontWeight: 700,
      fontFamily: "bold",
      lineHeight: {
        default: 1.38,
        tablet: 1.2,
        desktop: 1.2
      }
    },
    extended: {
      fontSize: 18,
      fontWeight: 700,
      // color: "primary",
      fontFamily: "extended",
      lineHeight: 1.33
    },
    medium: {
      fontSize: 16,
      fontWeight: 700,
      color: "primary",
      fontFamily: "medium",
      lineHeight: 1.33
    }
  }
};

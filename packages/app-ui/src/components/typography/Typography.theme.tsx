
import { ThemedComponentWithVariants } from "@apperside/ui-engine/src/theme";
import { TypographyComponentStyleProps, TypographyVariants } from ".";
export const typographyTheme: ThemedComponentWithVariants<TypographyComponentStyleProps, TypographyVariants> = {
  fontSize: 14,
  variants: {
    regular: {
      fontFamily: "regular"
    },
    black: {
      // fontWeight: "bold",
      fontFamily: "black"
    },
    bold: {
      fontFamily: "bold"
    },
    extended: {
      fontFamily: "extended"
    },
    medium: {
      fontFamily: "medium"
    }
  }
};

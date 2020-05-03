
import { ThemedComponentWithVariants } from "@apperside/ui-engine/src/theme";
import { TypographyComponentProps, TypographyVariants } from ".";
export const typographyTheme: ThemedComponentWithVariants<TypographyComponentProps, TypographyVariants> = {
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


import { ThemedComponentWithVariants } from "@apperside/ui-engine/src/theme";
import { ButtonStyleProps } from ".";

export type ButtonVariants = "primary" | "secondary"

export const buttonTheme: ThemedComponentWithVariants<ButtonStyleProps, ButtonVariants> = {
  // border: "redThin",
  // height: { default: "HEADER_DESKTOP", tablet: "HEADER_DESKTOP" },
  borderRadius: 20,
  px: 20,
  py: 3,
  alignContent: "center",
  justifyContent: "center",
  variants: {
    primary: {
      color: "white",
      backgroundColor: "error",
      alignContent: "center",
      justifyContent: "center",
      textStyle: {
        variant: "regular",
        color: "white"
      },
      // bg: "error",
      ":hover": {
        color: "grey",
        bg: "white",
        // @ts-ignore
        cursor: "pointer"
      }
    },
    secondary: {
      color: "white",
      bg: "success",
      ":hover": {
        color: "cta",
        bg: "error"
      }
    }
  }
};

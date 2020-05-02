
import { ThemedComponentWithVariants } from "@apperside/ui-engine/src/theme";
import { ButtonProps, ButtonVariants } from ".";
export const buttonTheme: ThemedComponentWithVariants<ButtonProps, ButtonVariants> = {
  border: "redThin",
  // height: { default: "HEADER_DESKTOP", tablet: "HEADER_DESKTOP" },
  variants: {
    primary: {
      color: "white",
      backgroundColor: "aliceblue",
      textStyle: {
        color: "red"
      },
      bg: "error",
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

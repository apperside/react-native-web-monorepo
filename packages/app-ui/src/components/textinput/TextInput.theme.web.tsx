
import { ThemedComponentWithVariants } from "@apperside/ui-engine/src/theme";
import { TextInputVariants, TextInputProps } from ".";

export const textInputTheme: ThemedComponentWithVariants<TextInputProps, TextInputVariants> = {
  border: "1px solid black",
  variants: {
    primary: {
      border: "1px solid black",
      fontSize: 16,
      color: "black",
      fontFamily: "regular"
    },
    secondary: {
      fontSize: 16,
      color: "gray",
      fontFamily: "regular"
    }
  }
};

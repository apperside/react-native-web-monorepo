import shouldForwardProp from "@styled-system/should-forward-prop";
import styled from "styled-components";
import { border, color, flexbox, layout, size, space, variant } from "styled-system";
import { ButtonStyleProps } from ".";
import { WithVariant } from "../..";
import { ButtonVariants } from "./Button.theme";

type Props = WithVariant<ButtonStyleProps, ButtonVariants> & { onClick: (e: any) => void }

const Button = styled.button.withConfig<Props>({
  // avoid forwarding styled-system's props to dom
  shouldForwardProp
})<Props>(
  space,
  size,
  layout,
  color,
  border,
  flexbox,
  props => variant({
    variants: props.theme.button.variants
  })
);

export default Button;

import React from "react";
import styled from "styled-components";
import { border, color, flexbox, layout, size, space, variant } from "styled-system";
import { ButtonStyleProps } from ".";
import shouldForwardProp from "@styled-system/should-forward-prop";

const Button = styled.button.withConfig<ButtonStyleProps>({
  // avoid forwarding styled-system's props to dom
  shouldForwardProp
})<ButtonStyleProps>(
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

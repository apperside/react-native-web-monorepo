import React from "react";
import styled from "styled-components";
import { border, color, flexbox, layout, size, space, variant } from "styled-system";
import { ButtonProps } from ".";
import shouldForwardProp from "@styled-system/should-forward-prop";

const Button = styled.button.withConfig<ButtonProps>({
  // avoid forwarding styled-system's props to dom
  shouldForwardProp
})<ButtonProps>(
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

import React from "react";
import styled from "styled-components";
import { border, color, flexbox, layout, size, space, variant } from "styled-system";
import { ButtonProps } from ".";
import { appTheme } from "../..";

const Button = styled.button<ButtonProps>(
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

Button.defaultProps = { ...appTheme.button };

export default Button;

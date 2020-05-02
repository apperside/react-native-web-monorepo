import React from "react";
import styled from "styled-components";
import { border, color, flexbox, layout, size, space, variant } from "styled-system";
import { ButtonProps } from ".";
import { appTheme } from "../..";

export const ButtonSpecs = styled.button<ButtonProps>(
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

// export const Button = styled(ButtonSpecs).withConfig<ButtonProps>({
//   // avoid forwarding styled-system's props to dom
//   shouldForwardProp: (prop) => (prop as any) === "children"
// })({});
ButtonSpecs.defaultProps = { ...appTheme.button };

const Button: React.FC<React.ComponentProps<typeof ButtonSpecs>> = ({ color, textStyle, ...props }) => {
  return <ButtonSpecs {...props}
    {...textStyle} >
    {props.children}
  </ButtonSpecs>;
};

export default Button;

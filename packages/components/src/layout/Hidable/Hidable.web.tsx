import styled from "styled-components";
import { mediaQuery } from "components/src/theme/styleguide/breakpoints";
import { BreakpointNames } from "styled-system";

export type HidableProps = {
  hiddenUp?: BreakpointNames
  hiddenDown?: BreakpointNames
}
/**
 * This is a component used to easly hide an element based on breakpoints
 */
export const Hidable = styled.div<HidableProps>(props => {
  if (props.hiddenDown && props.hiddenUp) {
    return ({
      [mediaQuery.down(props.hiddenDown)]: {
        display: "none"
      },
      [mediaQuery.up(props.hiddenUp)]: {
        display: "none"
      }
    });
  }
  if (props.hiddenDown) {
    return ({
      [mediaQuery.down(props.hiddenDown)]: {
        display: "none"
      }
    });
  }
  if (props.hiddenUp) {
    return ({
      [mediaQuery.up(props.hiddenUp)]: {
        display: "none"
      }
    });
  }
  return null;
});

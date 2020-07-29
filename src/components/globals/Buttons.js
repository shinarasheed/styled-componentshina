import styled from "styled-components";
import {
  setColor,
  setRem,
  setLetterSpacing,
  setFont,
  setBorder,
  setTransition,
} from "../../styles";

export const PrimaryBtn = styled.button`
  display: inline-block;
  background: ${setColor.primaryColor};
  color: ${setColor.mainWhite};
  text-transform: capitalize;
  font-size: ${setRem(18)};
  ${setFont.mainFont};
  padding: ${setRem(17)} ${setRem(36)};
  /* ${setBorder({ color: setColor.primaryColor })} */
  border:none;
  ${setLetterSpacing(3)};
  ${setTransition({ time: "2s" })}
  /* ${(props) => `margin: ${props.t || 0}`} */
  text-decoration: none;
  &:hover {
    background: transparent;
    color: ${setColor.primaryColor};
  }
  cursor:pointer;
`;

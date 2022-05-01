import styled from "styled-components";

export const InputStyles = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  outline: none;
  padding-left: 44px;
  border: 1px solid var(--border-color);
  transition: all 0.5s;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &:focus {
    border: 2px solid var(--border-color-active);
    padding-left: 16px;

    & + svg {
      left: -20px;
      opacity: 0;
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  overflow: hidden;

  & svg {
    position: absolute;
    top: 1rem;
    left: 16px;
    transition: all 0.5s;
  }
`;

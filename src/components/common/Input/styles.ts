import styled from "styled-components";

export const InputStyles = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  outline: none;
  padding-left: 44px;
  border: 1px solid var(--border-color);

  &:focus {
    border: 2px solid var(--border-color-active);

    & + svg {
      left: 16px;
      opacity: 0;
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  overflow: hidden;
  transition: all 3s;

  & svg {
    position: absolute;
    top: 1rem;
    left: 16px;
  }
`;

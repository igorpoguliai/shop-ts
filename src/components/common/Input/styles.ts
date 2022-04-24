import styled from "styled-components";

export const InputStyles = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 8px;
  outline: none;
  padding-left: 44px;
  border: 1px solid var(--border-color);

  &:focus {
    border: 2px solid var(--border-color-active);
  }
`;

export const InputWrapper = styled.div`
  position: relative;

  & svg {
    position: absolute;
    top: 1rem;
    left: 16px;
  }

  &:hover {
    svg {
      transform: scale(1.1);
      transition: all 1s;
    }
  }
`;

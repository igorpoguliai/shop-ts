import styled, { css } from "styled-components";

export const Chip = styled.button<{ isActive: boolean }>`
  background: var(--second-color);
  color: var(--text-color);
  border-radius: 8px;
  height: 50px;
  padding: 0 16px;
  cursor: pointer;
  white-space: nowrap;
  border: 1px solid var(--border-color);

  &:active {
    background: var(--background-color);
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background: var(--accent-color);
      color: var(--second-color);
      border: 1px solid var(--border-color-active);

      &:active {
        background: var(--border-color-active);
      }
    `}
`;

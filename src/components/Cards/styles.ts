import styled from "styled-components";

export const ProductWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: var(--background-color);

  & input {
    &::placeholder {
      color: var(--text-color);
    }
  }

  && {
    padding: 0 15px 70px;
  }
`;

export const ChipsWrapper = styled.div`
  display: flex;
  gap: 12px;
  overflow: auto;
  background: var(--background-color);
  padding: 18px 15px 12px;
`;

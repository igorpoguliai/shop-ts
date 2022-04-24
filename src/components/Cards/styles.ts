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
    padding: 12px 15px 70px;
  }
`;

export const ChipsWrapper = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  gap: 12px;
  overflow: auto;
  background: #f1f5fb;
  padding: 18px 0 0 16px;
`;

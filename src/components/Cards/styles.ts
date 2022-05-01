import styled from "styled-components";
import { CardWrapper } from "../Card/styles";

export const Container = styled.div`
  max-width: 430px;
  margin: auto;
  padding: 18px 0 0;
  background: var(--background-color);
`;

export const ProductWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px 15px 70px;

  ${CardWrapper}:last-child {
    margin-bottom: 0;
  }

  & input {
    &::placeholder {
      color: var(--text-color);
    }
  }
`;

export const Message = styled.div`
  width: 100%;
  height: 100vh;
  color: var(--text-color);
  font-style: italic;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    width: 75px;
    height: 75px;
    margin-bottom: 25px;
  }
`;

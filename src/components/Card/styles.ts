import styled from "styled-components";
import { Flex as _Flex } from "../common/styles";
import { ChipsWrapper } from "../common/Chips/styles";

export const CardWrapper = styled.div`
  width: 100%;
  background: var(--second-color);
  border-radius: 8px;
  padding: 16px;

  ${ChipsWrapper} {
    padding: 18px 0 0;
  }

  margin: 24px 0 70px;
  display: flex;
  flex-direction: column;

  span {
    color: var(--text-color);
    font-weight: 400;

    &:first-child {
      color: #3d3d3d;
      font-weight: 500;
      font-size: 28px;
      line-height: 34px;
    }
  }
`;

export const EmptyImage = styled.div`
  width: 100%;
  height: 260px;
  border-radius: 8px;
  background: linear-gradient(0deg, #f9f9f9, #f9f9f9);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 18px;

  span {
    padding-top: 15px;
    font-size: 24px;
    line-height: 29px;
  }
`;

export const Image = styled.img`
  border-radius: 8px;
  margin-top: 18px;
`;

export const Description = styled.p`
  padding: 18px 0;
  font-weight: 400;
  color: var(--text-color);
  text-align: center;
`;

export const BlockInfo = styled(_Flex)`
  span {
    &:first-child {
      color: var(--text-color);
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    }

    &:last-child {
      color: #3d3d3d;
      font-weight: 500;
      font-size: 28px;
      line-height: 34px;
    }
  }
`;

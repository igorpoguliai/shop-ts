import styled from "styled-components";
import { ChipsWrapper as _ChipsWrapper } from "../Cards/styles";
import { Flex as _Flex } from "../common/styles";

export const Wrapper = styled.div`
  width: 100%;
  background: var(--second-color);
  border-radius: 8px 8px 0 0;
  padding: 16px 16px 0;
  margin-top: 24px;
  display: flex;
  flex-direction: column;

  & span {
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

  & span {
    padding-top: 15px;
    font-size: 24px;
    line-height: 29px;
  }
`;

export const Image = styled.img`
  border-radius: 8px;
  margin: 18px 0 0;
`;

export const ChipsWrapper = styled(_ChipsWrapper)`
  gap: 8px;
  background: var(--second-color);
`;

export const Description = styled.p`
  width: 100%;
  background: var(--second-color);
  padding: 18px 16px;
  font-weight: 400;
  color: var(--text-color);
  text-align: center;
`;

export const BlockInfo = styled(_Flex)`
  width: 100%;
  background: var(--second-color);
  padding: 0 16px 16px;
`;

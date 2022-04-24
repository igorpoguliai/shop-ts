import styled from "styled-components";
import { Flex as _Flex } from "../common/styles";

export const ChipsWrapper = styled.div`
  display: flex;
  gap: 12px;
  padding-bottom: 12px;
  position: absolute;
  top: 18px;
  left: 15px;
`;

export const MyFlex = styled(_Flex)`
  gap: 24px;
`;

export const Container = styled.div`
  && {
    padding: 80px 15px 0;
  }
`;

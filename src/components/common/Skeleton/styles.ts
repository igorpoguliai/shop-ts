import styled from "styled-components";
import { Flex as _Flex } from "../styles";

export const WrapperSkeleton = styled.div`
  width: 100%;
  height: 100vh;
  background: #e5e5e5;
  padding: 18px 15px 0;
  overflow: hidden;
  position: relative;
`;

export const WrapperChips = styled.div`
  display: flex;
  gap: 12px;
  padding-bottom: 12px;
`;

export const MyFlex = styled(_Flex)`
  gap: 24px;
`;

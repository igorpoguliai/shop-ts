import styled from "styled-components";
import { Flex as _Flex } from "../common/styles";

export const WrapperChips = styled.div`
  display: flex;
  gap: 12px;
  padding-bottom: 12px;
`;

export const MyFlex = styled(_Flex)`
  gap: 24px;
`;

export const Container = styled.div`
  max-width: 430px;

  && {
    padding: 80px 15px 0;
  }

  .kMAnlg {
    position: absolute;
    top: 18px;
    left: 15px;
  }
`;

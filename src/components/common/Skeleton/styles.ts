import styled, { css, keyframes } from "styled-components";
import { Item } from "./SkeletonItem/styles";

export const SkeletonWrapper = styled.div<{
  SkeletonBackground: string;
  itemBackground: string;
}>`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;

  ${({ SkeletonBackground }) =>
    SkeletonBackground &&
    css`
      background: ${SkeletonBackground};
    `}

  ${({ itemBackground }) =>
    itemBackground &&
    css`
      ${Item} {
        background: ${itemBackground};
      }
    `};
`;

const animation = keyframes`
  0% {
    transform: translateX(-150%);
  }
  50% {
    transform: translateX(-60%);
  }
  100% {
    transform: translateX(150%);
  }
`;

export const Shimmer = styled.div<{
  ShimmerBackground: string;
}>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &::after {
    content: "";
    width: 60%;
    display: block;
    height: 100%;
    opacity: 0.6;
    ${({ ShimmerBackground }) =>
      ShimmerBackground &&
      css`
        background: linear-gradient(
          90deg,
          transparent 0%,
          ${ShimmerBackground} 50%,
          transparent 100%
        );
      `}

    transform: skewX(-20deg);
    animation: ${animation} 1s linear infinite;
  }
`;

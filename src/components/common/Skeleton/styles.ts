import styled, { keyframes } from "styled-components";

export const WrapperSkeleton = styled.div<{ style: Object }>`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
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

export const Shimmer = styled.div`
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
    background: linear-gradient(
      90deg,
      transparent 0%,
      #f1f5fb 50%,
      transparent 100%
    );
    transform: skewX(-20deg);
    animation: ${animation} 1s linear infinite;
  }
`;

import styled from "styled-components";

export const WrapperSkeleton = styled.div<{ style: Object }>`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const StylesSkeleton = styled.div`
  &::before {
    content: "";
    position: absolute;
    z-index: 5;
    left: 0;
    top: 0;
    height: 100%;
    width: 10px;
    background: linear-gradient(
      to right,
      #e8e8e8 25%,
      #f1f1f1 50%,
      #f1f1f1 75%,
      #e8e8e8 100%
    );
    animation-name: gradient-animation;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    filter: blur(5px);
  }

  @keyframes gradient-animation {
    from {
      left: 0%;
    }
    to {
      left: 100%;
    }
  }
`;

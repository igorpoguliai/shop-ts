import styled from "styled-components";

export const Chips = styled.div<{ style: Object }>`
  background: #e8e8e8;
  border-radius: 8px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 10px;
    background: linear-gradient(
      to right,
      #e2e2e2 25%,
      #d5d5d5 50%,
      #e2e2e2 100%
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

export const Wrapper = styled.div`
  position: relative;
`;

// @ts-nocheck

import styled from 'styled-components';

const Style = styled.div`
  display: inline-block;
  position: relative;
  svg path {
    opacity: 0.7;
  }
  .sliderHandle {
    width: 50%;
    pointer-events: all;
    position: absolute;
    left: 50%;
    top: 50%;
    transform-origin: 0 50%;
    &:after {
      content: '';
      display: block;
      background: #cabd98;
      border-radius: 100%;
      height: 30px;
      width: 30px;
      right: -15px;
    }
    &:hover:after {
      box-shadow: 0 0 10px rgb(37, 205, 247);
    }
  }
  ${({ overrideStyle }) => overrideStyle}
`;
export default Style;

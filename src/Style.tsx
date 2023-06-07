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
      content: ' ';
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 100%;
      position: absolute;
      right: 10px;
      background: #cabd98;
      border: 1px solid #ccc;
      top: -10px;
      transition: all ease 0.4s;
    }
    &:hover:after {
      box-shadow: 0 0 10px rgb(37, 205, 247);
    }
  }
  ${({ overrideStyle }) => overrideStyle}
`;
export default Style;

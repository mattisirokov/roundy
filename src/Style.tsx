import styled from 'styled-components';

interface StyleProps {
  overrideStyle?: string;
}

const Style = styled.div<StyleProps>`
  // Your default styles...
  .sliderHandle:after {
    content: '';
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    position: absolute;
    right: 3px;
    background: linear-gradient(to top, #fff, #f2f2f2);
    border: 1px solid #ccc;
    top: -10px;
    transform: all ease 0.4s;
  }

  ${({ overrideStyle }) => overrideStyle}
`;

export default Style;

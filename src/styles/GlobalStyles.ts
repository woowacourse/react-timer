import { createGlobalStyle } from 'styled-components';
import DigitalClockFont from '../assets/fonts/Digital-Numbers.ttf';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  ul,
  li {
    list-style: none;
  }
  
  :root {
    --green-100: #E2F2EF;
    --green-200: #C3DFE3;
    --green-300: #7FBBB2;
  }

  @font-face {
      font-family: "DigitalClock";
      src: url("${DigitalClockFont}");
  }

  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
    background-color: transparent;
  }
`;

export default GlobalStyle;

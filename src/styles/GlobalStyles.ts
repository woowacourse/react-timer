import { createGlobalStyle } from 'styled-components';

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
`;

export default GlobalStyle;

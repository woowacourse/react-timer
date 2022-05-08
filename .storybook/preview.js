import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/GlobalStyle";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const theme = {
  woowagreen: "#6FA189",
  woowawhite: "#FFFFFF",
  woowablack: "#000000",
};

export const decorators = [
  (Story, context) => {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story {...context} />
      </ThemeProvider>
    );
  },
];

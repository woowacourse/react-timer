import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/styles/GlobalStyle";
import theme from "../src/styles/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story, context) => {
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Story {...context} />
        </ThemeProvider>
      </>
    );
  },
];

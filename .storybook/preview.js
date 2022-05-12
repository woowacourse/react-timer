import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/styles/GlobalStyle";
import theme from "../src/styles/theme";
import { MemoryRouter } from "react-router";

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
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <MemoryRouter initialEntries={["/"]}>
            <Story {...context} />
          </MemoryRouter>
        </ThemeProvider>
      </>
    );
  },
];

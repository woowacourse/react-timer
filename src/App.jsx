import Reset from "styled-reset";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";

const theme = {
  woowagreen: "#6FA189",
  woowawhite: "#FFFFFF",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <div className="App"></div>
    </ThemeProvider>
  );
}

export default App;

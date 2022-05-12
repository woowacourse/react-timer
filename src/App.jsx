import { ThemeProvider } from "styled-components";
import CountDownPage from "./pages/CountDownPage/CountDownPage";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import Logo from "./components/Logo/Logo";
import CorpAddress from "./components/CorpAddress/CorpAddress";
import styled from "styled-components";
import NavLink from "./components/NavLink/NavLink";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

const StyledLayout = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);

  .left-top-panel {
    grid-column: 1;
    grid-row: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .left-middle-panel {
    grid-column: 1;
    grid-row: 2 / 6;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .left-bottom-panel {
    grid-column: 1;
    grid-row: 6;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .right-panel {
    grid-column: 2 / 5;
    grid-row: 1 / 7;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledLayout>
        <header className="left-top-panel">
          <Logo />
        </header>
        <NavBar className="left-middle-panel">
          <NavLink to="/">카운트다운</NavLink>
          <NavLink to="/">스톱워치</NavLink>
          <NavLink to="/">세계시계</NavLink>
        </NavBar>
        <main className="right-panel">
          <Routes>
            <Route path="/" element={<CountDownPage />} />
          </Routes>
        </main>
        <footer className="left-bottom-panel">
          <CorpAddress>
            <p>사업자: 박공원</p>
            <p>사업자등록번호: 220208</p>
            <p>주소: 서울특별시 송파구 루터회관 14층 페어룸4</p>
          </CorpAddress>
        </footer>
      </StyledLayout>
    </ThemeProvider>
  );
}

export default App;

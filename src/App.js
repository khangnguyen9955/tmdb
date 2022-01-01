import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { MuiThemeProvider } from "@material-ui/core";
import Footer from "./components/Footer";
import "./index.css";
import theme from "./theme";
import { CssBaseline } from "@mui/material";
import { Routes, Route, Router } from "react-router-dom";
import SearchPage from "./components/SearchPage";
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <main
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route
              path="/search/:type/:query/:page"
              element={<SearchPage />}
              exact
            />
          </Routes>
          <Footer />
        </Router>
      </main>
    </MuiThemeProvider>
  );
}

export default App;

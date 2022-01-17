import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { MuiThemeProvider } from "@material-ui/core";
import Footer from "./components/Footer";
import "./index.css";
import theme from "./theme";
import { CssBaseline } from "@mui/material";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import PopularPage from "./components/PopularPage";
import SearchPage from "./components/SearchPage";
import MoviePage from "./components/MoviePage";
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/popular/:type/:page" element={<PopularPage />} />
            <Route path="/search/:type/:query/:page" element={<SearchPage />} />
            <Route path="/movie/:id" element={<MoviePage />} />
          </Routes>
          <Footer />
        </Router>
      </main>
    </MuiThemeProvider>
  );
}

export default App;

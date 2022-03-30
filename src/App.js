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
import MoviePage from "./components/MoviePage/MoviePage";
import TVPage from "./components/MoviePage/TVPage";
import ScrollToTop from "./components/common/scrollToTop";
import Biography from "./components/PersonPage/Biography";
import PersonPage from "./components/PersonPage";
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
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/popular/:type/:page" element={<PopularPage />} />
            <Route path="/search/:type/:query/:page" element={<SearchPage />} />
            <Route path="/movie/:id" element={<MoviePage />} />
            <Route path="/tv/:id" element={<TVPage />} />
            <Route path="/person/:id" element={<PersonPage />} />
          </Routes>
          <Footer />
        </Router>
      </main>
    </MuiThemeProvider>
  );
}

export default App;

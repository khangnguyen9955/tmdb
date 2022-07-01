import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { MuiThemeProvider } from "@material-ui/core";
import Footer from "./components/Footer";
import "./index.css";
import theme from "./theme";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PopularPage from "./components/PopularPage";
import SearchPage from "./components/SearchPage";
import MoviePage from "./components/MoviePage/MoviePage";
import TVPage from "./components/MoviePage/TVPage";
import ScrollToTop from "./components/common/scrollToTop";
import PersonPage from "./components/PersonPage";
import PublicRoute from "./components/common/PublicRoute";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import ProfilePage from "./components/ProfilePage";
import { useDispatch, useSelector } from "react-redux";
import { getWatchlist } from "./redux/watchlistActions";
import { useEffect } from "react";
import PrivateRoute from "./components/common/PrivateRoute";
import { fetchUserLogin } from "./redux/userActions";

function App() {
  const dispatch = useDispatch();

  const { isAuth } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchUserLogin());
  }, []);

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchUserLogin());
      dispatch(getWatchlist());
    }
  }, [dispatch, isAuth]);

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
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <LoginPage />{" "}
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <RegisterPage />{" "}
                </PublicRoute>
              }
            />
            <Route
              path="/profile/"
              element={
                <PrivateRoute>
                  <ProfilePage />{" "}
                </PrivateRoute>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </main>
    </MuiThemeProvider>
  );
}

export default App;

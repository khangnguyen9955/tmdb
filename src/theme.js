import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme();
const theme = createTheme({
  MuiCard: {
    root: {
      borderRadius: 8,
    },
  },
  MuiCardActionArea: {
    root: {
      borderRadius: 8,
    },
  },
  typography: {
    h3: {
      fontWeight: "bold",
    },
    h4: {
      fontWeight: "bold",
    },
    h5: {
      fontWeight: "bold",
    },
    h6: {
      fontWeight: "bold",
    },
    subtitle1: {
      fontWeight: "bold",
      lineHeight: 1.2,
      textDecoration: "none",
      color: "black",
    },
     },
  palette: {
    primary: {
      main: "#142851",
      contrastText: defaultTheme.palette.getContrastText("#142851"),
    },
    secondary: {
      main: "#063440",
      contrastText: defaultTheme.palette.getContrastText("#063440"),
    },
  },
});

export default theme;

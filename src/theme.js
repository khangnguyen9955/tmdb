import { createTheme } from "@material-ui/core";

const defaultTheme = createTheme();
const theme = createTheme({
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

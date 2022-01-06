import {
  Box,
  Button,
  Grid,
  Typography,
  alpha,
  makeStyles,
} from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import join_today from "../../assets/join_today.jpeg";

const useStyles = makeStyles((theme) => ({
  joinToday: {
    marginTop: theme.spacing(3),
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "space-around",
    flexDirection: "column",
    flexWrap: "wrap",
    maxWidth: 1300,
    // Something wrong here
    backgroundImage: `url(${join_today})`,
    color: theme.palette.getContrastText(purple[800]),
    backgroundPosition: "center",
    backgroundSize: "cover",
    minHeight: 300,
  },
  backdrop: {
    backgroundImage: `linear-gradient(
      ${alpha(purple[800], 0.5)}, 
      ${alpha(purple[800], 0.5)}),
      url(${join_today})`,
    color: theme.palette.getContrastText(purple[800]),
    backgroundPosition: "center",
    backgroundSize: "cover",
    minHeight: 300,
  },
  button: {
    marginTop: theme.spacing(3),
    backgroundColor: "rgba(128,91,231, 1)",
    color: theme.palette.getContrastText(purple[800]),
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  ul: {
    marginLeft: 20,
    padding: "0 20px",
    listStyleType: "circle",
    opacity: 0.8,
  },
}));

const JoinToday = () => {
  const classes = useStyles();

  return (
    <div className={classes.joinToday}>
      <Box style={{ paddingLeft: "38px" }}>
        <Typography variant="h4">Join Today</Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid
          item
          md={7}
          xs={12}
          style={{ paddingLeft: "48px", paddingTop: "20px" }}
        >
          <Typography>
            Get access to maintain your own custom personal lists, track what
            you've seen and search and filter for what to watch next—regardless
            if it's in theatres, on TV or available on popular streaming
            services like .
          </Typography>
          <Button variant="contained" className={classes.button}>
            Sign up
          </Button>
        </Grid>

        <Grid item md={5} style={{ paddingTop: "10px" }}>
          <ul className={classes.ul}>
            <Typography>Enjoy TMDB ad free</Typography>
            <Typography>Maintain a personal watchlist</Typography>
            <Typography>
              Filter by your subscribed streaming services and find something to
              watch
            </Typography>
            <Typography>Log the movies and TV shows you've seen</Typography>
            <Typography>Build custom lists</Typography>
            <Typography>Contribute to and improve our database</Typography>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
};
export default JoinToday;

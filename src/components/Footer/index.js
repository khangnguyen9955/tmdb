import {
  Button,
  CardMedia,
  Container,
  Grid,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import footer_image from "../../assets/footer_image.svg";
const useStyles = makeStyles((theme) => ({
  logo: {
    width: 120,
    borderRadius: 0,
  },
  footer: {
    padding: theme.spacing(6, 0),
    marginTop: "auto",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.getContrastText(theme.palette.primary.main),
  },
  grid: {
    "& > div > p > a": {
      display: "block",
      width: "fit-content",
      color: theme.palette.getContrastText(theme.palette.primary.main),
      "&:hover": {
        textDecoration: "none",
      },
    },
  },
  join: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  button: {
    color: theme.palette.primary.main,
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="md">
        <Grid container justifyContent="space-between" spacing={2}>
          <Grid item md={3} className={classes.join}>
            <CardMedia
              component="img"
              image={footer_image}
              title="logo"
              alt="logo"
              className={classes.logo}
            />
            <Button
              className={classes.button}
              component={Link}
              variant="contained"
            >
              <Typography variant="subtitle1" color="primary">
                Hi {/* {user.username} */}
              </Typography>
            </Button>
          </Grid>

          <Grid
            item
            md={9}
            xs={12}
            container
            justifyContent="space-between"
            spacing={2}
            className={classes.grid}
          >
            <Grid item md="auto" xs={12}>
              <Typography variant="h6">THE BASICS</Typography>
              <Typography>
                <Link>About TMDB</Link>
                <Link>Contact us</Link>
                <Link>Support Forum</Link>
                <Link>API</Link>
                <Link>System Status</Link>
              </Typography>
            </Grid>

            <Grid item md="auto" xs={12}>
              <Typography variant="h6">GET INVOLVED</Typography>
              <Typography>
                <Link>Contribution Bible</Link>
                <Link>3rd Party Application</Link>
                <Link>Add New Movie</Link>
                <Link>Add New TV Show</Link>
              </Typography>
            </Grid>

            <Grid item md="auto" xs={12}>
              <Typography variant="h6">COMMUNITY</Typography>
              <Typography>
                <Link>Guidelines</Link>
                <Link>Discussions</Link>
                <Link>Leaderboard</Link>
                <Link>Twitter</Link>
              </Typography>
            </Grid>

            <Grid item md="auto" xs={12}>
              <Typography variant="h6">LEGAL</Typography>
              <Typography>
                <Link>Term of Use</Link>
                <Link>API Terms of Use</Link>
                <Link>Privacy Policy</Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;

import { makeStyles, Typography } from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";
import { camelCase } from "lodash";
import { alpha } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  welcomeSection: (props) => ({
    height: "calc(100vh/2.5)",
    backgroundPosition: "top center",
    backgroundSize: "cover",
    color: "white",
    minHeight: 300,
    maxHeight: 360,
    backgroundRepeat: "no-repeat",
    width: 1300,
    backgroundImage: `linear-gradient(to right,
      ${alpha(theme.palette.secondary.main, 0.9)},
      ${alpha(theme.palette.primary.main, 0.9)}),
      url(${props.backdrop})`,
    color: theme.palette.getContrastText(theme.palette.primary.main),
  }),
  media: {
    height: "100%",
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    alignContent: "flex-start",
  },
  contentWrapper: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    alignContent: "flex-start",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 30,
    paddingBottom: 30,
  },

  title: {
    width: "100%",
    marginBottom: 20,
  },
  search: {
    width: "100%",
  },
  searchForm: {
    position: "relative",
    marginTop: 30,
    top: 0,
    left: 0,
  },
  inputForm: {
    width: "100%",
    color: "white",
    height: 46,
    lineHeight: "1.1em",
    color: "rgba(0,0,0,0.5)",
    border: "none",
    borderRadius: 30,
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 20,
  },
}));

const Welcome = ({ backdrop }) => {
  const classes = useStyles({ backdrop });
  return (
    <div className={classes.welcomeSection}>
      <div className={classes.media}>
        <div className={classes.wrapper}>
          <div className={classes.contentWrapper}>
            <div className={classes.title}>
              <Typography variant="h3">Welcome.</Typography>
              <Typography variant="h5">
                Millions of movies, TV shows and people to discover. Explore
                now.
              </Typography>
            </div>
            <div className={classes.search}>
              <form className={classes.searchForm}>
                <input
                  className={classes.inputForm}
                  placeholder="Search for a movie, tv show, person...."
                ></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Welcome;

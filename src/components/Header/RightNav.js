import { Link, makeStyles, Menu, Typography } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
const useStyles = makeStyles(() => ({
  div: {
    display: "flex",
    justifyContent: "flex-end",
    flexWrap: "nowrap",
    alignItems: "center",
  },
  linkItem: {
    marginLeft: 30,
    textDecoration: "none",
    cursor: "pointer",
    color: "#fff",
  },
  searchIcon: {
    color: "blue",
  },
}));

const RightNav = () => {
  const classes = useStyles();
  return (
    <div className={classes.div}>
      <Typography className={classes.div}>
        <LanguageIcon className={classes.linkItem} />
        <Link className={classes.linkItem}> Login</Link>
        <Link className={classes.linkItem}> Join TMDB</Link>
        <SearchIcon className={classes.linkItem} />
      </Typography>
    </div>
  );
};

export default RightNav;

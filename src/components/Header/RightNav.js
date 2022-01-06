import { makeStyles, Menu, Typography } from "@material-ui/core";

import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import { Link } from "react-router-dom";
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
    fontWeight: 600,
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
        <Link to="/login" className={classes.linkItem} component={Link}>
          Login
        </Link>
        <Link to="/signup" className={classes.linkItem} component={Link}>
          Join TMDB
        </Link>
        <SearchIcon className={classes.linkItem} />
      </Typography>
    </div>
  );
};

export default RightNav;

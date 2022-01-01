import { Typography, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import logo_header from "../../assets/logo_header.svg";
import { Link } from "react-router-dom";
const useStyles = makeStyles(() => ({
  logo: {
    height: 20,
    width: 160,
    marginRight: 16,
  },
  linkItem: {
    marginRight: 14,
    textDecoration: "none",
    cursor: "pointer",
    color: "#fff",
  },
  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 40,
    flexWrap: "nowrap",
    overflow: "visibile",
  },
}));

const LeftNav = () => {
  const classes = useStyles();
  return (
    <div className={classes.div}>
      <Link to="/">
        <CardMedia
          component="img"
          image={logo_header}
          title="logo"
          alt="logo"
          className={classes.logo}
        />
      </Link>
      <Typography>
        <Link to="/search/movie/the/1" className={classes.linkItem}>
          Movies
        </Link>
        <Link to="search/tv/the/1" className={classes.linkItem}>
          TV Shows
        </Link>
        <Link to="search/person/the/1" className={classes.linkItem}>
          People
        </Link>
        <Link hred="#" className={classes.linkItem}>
          More
        </Link>
      </Typography>
    </div>
  );
};

export default LeftNav;

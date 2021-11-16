import { Link, makeStyles, Typography, CardMedia } from "@material-ui/core";
import logo_header from "../../assets/logo_header.svg";

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
      <Link>
        <CardMedia
          component="img"
          image={logo_header}
          title="logo"
          alt="logo"
          className={classes.logo}
        />
      </Link>
      <Typography>
        <Link className={classes.linkItem}>Movies</Link>
        <Link className={classes.linkItem}>TV Shows</Link>
        <Link className={classes.linkItem}>People</Link>
        <Link className={classes.linkItem}>More</Link>
      </Typography>
    </div>
  );
};

export default LeftNav;

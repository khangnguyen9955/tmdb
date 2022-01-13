import { IconButton, makeStyles, Menu, Typography } from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";

import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import { Link } from "react-router-dom";
import { useState } from "react";
const useStyles = makeStyles((theme) => ({
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
    color: theme.palette.getContrastText(theme.palette.primary.main),
    fontSize: 29,
  },
}));

const RightNav = ({ open, handleOpen, handleClose }) => {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <>
        <Typography className={classes.div}>
          <LanguageIcon className={classes.linkItem} />
          <Link to="/login" className={classes.linkItem} component={Link}>
            Login
          </Link>
          <Link to="/signup" className={classes.linkItem} component={Link}>
            Join TMDB
          </Link>
        </Typography>
      </>
      {!open ? (
        <IconButton onClick={handleOpen} edge="end">
          <SearchIcon className={classes.searchIcon} />
        </IconButton>
      ) : (
        <IconButton onClick={handleClose} edge="end">
          <CloseIcon className={classes.searchIcon} />
        </IconButton>
      )}
    </div>
  );
};

export default RightNav;

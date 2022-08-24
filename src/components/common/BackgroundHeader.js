import React from "react";
import { makeStyles, Toolbar } from "@material-ui/core";
import { CardMedia, Typography } from "@mui/material";

const useStyles = makeStyles(() => ({
  cardMedia: {
    height: 50,
    width: "auto",
    borderRadius: 0,
  },
  background: {
    padding: 40,
    flexWrap: "nowrap",
    justifyContent: "space-between",
    color: "#fff",
    display: "flex",
    maxWidth: 1300,
    width: "100%",
  },
}));

const BackgroundHeader = ({ details }) => {
  const classes = useStyles();
  return (
    <Toolbar className={classes.background}>
      {details.logo_path ? (
        <CardMedia
          component="img"
          image={details.logo_path}
          alt={details.title}
          title={details.title}
          loading="lazy"
          className={classes.cardMedia}
        />
      ) : (
        <Typography sx={{ fontWeight: 700, fontSize: "1.8em" }}>
          {details.name}
        </Typography>
      )}
      <Typography sx={{ fontWeight: 600, fontSize: "1.5em", opacity: 0.8 }}>
        {details.movies.total_results} movies
      </Typography>
    </Toolbar>
  );
};

export default BackgroundHeader;

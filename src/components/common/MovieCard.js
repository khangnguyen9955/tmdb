import { makeStyles } from "@material-ui/core";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { DateTime } from "luxon";
import React from "react";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  card: {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "flex-start",
    border: "1px solid #e3e3e3",
    marginBottom: 24,
    width: 180,
  },
  cardMedia: {
    width: "100%",
    height: 275,
  },

  cardContent: {
    display: "flex",
    whiteSpace: "normal",
    flexWrap: "wrap",
    alignContent: "flex-start",
    paddingTop: 26,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 12,
    position: "relative",
    width: "100%",
  },
  details: {
    fontSize: "1em",
    color: "rgba(0,0,0,0.6)",
  },
  title: {
    color: "#000",
    textDecoration: "none",
  },
}));
const MovieCard = ({ details, media_type = "movie" }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} sx={{ borderRadius: "8px" }}>
      <CardActionArea component={Link} to={`/${media_type}/${details.id}`}>
        <CardMedia
          component="img"
          image={details.poster_path}
          alt={details.title}
          title={details.title}
          loading="lazy"
          className={classes.cardMedia}
        />
      </CardActionArea>
      <CardContent className={classes.cardContent}>
        <div>
          <Typography
            variant="subtitle1"
            component={Link}
            to={`/${media_type}/${details.id}`}
            className={classes.title}
            sx={{ fontWeight: "700", lineHeight: "1.2" }}
          >
            {details.title}
          </Typography>
          <Typography className={classes.details}>
            {details.release_date &&
              DateTime.fromISO(details.release_date).toFormat("MMM dd, yyyy")}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;

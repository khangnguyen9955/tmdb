import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { DateTime } from "luxon";
import React from "react";
import { Link } from "react-router-dom";
const useStyles = makeStyles(() => ({
  card: {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "flex-start",
    border: "1px solid #e3e3e3",
    borderRadius: 8,
    marginBottom: 24,
    width: 180,
    height: 390,
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
  overview: {},
}));
const MovieCard = ({ details, media_type = "movie" }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
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
          <Typography>{details.title}</Typography>
          <Typography>
            {details.release_date &&
              DateTime.fromISO(details.release_date).toFormat("MMM dd, yyy")}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;

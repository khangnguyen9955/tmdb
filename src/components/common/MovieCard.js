import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { DateTime } from "luxon";
import React from "react";

const useStyles = makeStyles(() => ({
  card: {
    display: "flex",
    flexWrap: "wrap",
    borderRadius: 8,
    marginBottom: 24,
  },
  cardMedia: {
    width: 100,
    height: "100%",
  },
  cardContent: {
    display: "flex",
    whiteSpace: "normal",
    flexWrap: "wrap",
    alignContent: "flex-start",
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
          img=""
          alt=""
          title=""
          loading=""
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
        <div className={classes.overview}>
          <Typography>{details.overview}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;

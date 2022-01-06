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
    display: "flex",
    maxWidth: "calc(100vw-82px)",
    marginBottom: theme.spacing(3),
  },
  area: {
    minWidth: 94,
    height: 141,
  },
  cardMedia: {
    height: "100%",
    width: 100,
    borderRadius: 0,
  },
  cardContent: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    flexWrap: "wrap",
    alignContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    padding: "10px 15px",
  },
  overview: {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  title: {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    textDecoration: "none",
    color: "black",
  },
  details: {
    fontSize: "1em",
    color: "rgba(0,0,0,0.6)",
  },
}));
const SearchCard = ({ details, media_type = "movie" }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea
        component={Link}
        to={`/${media_type}/${details.id}`}
        className={classes.area}
        sx={{ width: "91px" }}
      >
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
            sx={{ fontWeight: "700" }}
          >
            {details.title}
          </Typography>
          <Typography className={classes.details}>
            {details.release_date &&
              DateTime.fromISO(details.release_date).toFormat("MMM dd, yyyy")}
          </Typography>
          <div className={classes.overview}>
            <Typography>{details.overview}</Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchCard;

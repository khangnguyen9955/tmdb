import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  ImageListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    minWidth: 130,
    width: 130,
    height: 200,
  },
  card: {
    display: "flex",
    height: 200,
    borderRadius: 8,
    border: "1px solid rgba(227,227,227,1)",
    marginBottom: 30,
  },

  overview: {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  name: {
    fontWeight: 600,
    fontSize: "1.3em",
  },
  episode: {
    fontWeight: 600,
  },
  currentSeason: {
    fontWeight: 600,
    fontSize: "1.4em",
    marginTop: 20,
    marginBottom: 20,
  },
}));

const CurrentSeason = ({ lastSeason }) => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.currentSeason}>Current Season</Typography>

      <Card key={lastSeason.id} className={classes.card}>
        <CardMedia
          component="img"
          title={lastSeason.name}
          image={lastSeason.poster_path}
          alt={lastSeason.name}
          loading="lazy"
          className={classes.cardMedia}
        />
        <CardContent className={classes.cardContent}>
          <div>
            <Typography className={classes.name}>
              <Box>{lastSeason.name}</Box>
            </Typography>
            <Typography className={classes.episode}>
              {new Date(lastSeason.air_date).getFullYear()} |{" "}
              {lastSeason.episode_count} Episodes
            </Typography>
          </div>
          {lastSeason.overview && (
            <div className={classes.overview}>
              <Typography>{lastSeason.overview}</Typography>
            </div>
          )}
        </CardContent>
      </Card>
      <Divider />
    </>
  );
};

export default CurrentSeason;

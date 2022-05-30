import React from "react";
import { Box, IconButton, makeStyles, Typography } from "@material-ui/core";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { DateTime } from "luxon";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import { useDispatch } from "react-redux";
import { removeFromWatchlist } from "../../redux/watchlistActions";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    width: "100%",
    height: 250,
    marginBottom: 20,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
  cardMedia: {
    padding: 10,
    height: "100%",
    width: 150,
    maxWidth: 180,
    [theme.breakpoints.down("sm")]: {
      width: 100,
    },
  },
  cardContent: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
      paddingTop: theme.spacing(1),
      "&:last-child": {
        paddingBottom: theme.spacing(1),
      },
    },
  },
  removeButton: {
    alignSelf: "end",
    marginRight: theme.spacing(1),
    color: "white",
    opacity: 0.8,
  },
  doughnut: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  progress: {
    color: "#90caf9",
    position: "absolute",
    top: -4,
    left: -4,
    zIndex: 1,
  },

  overview: {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
    overflow: "hidden",
    textOverflow: "ellipsis",
    [theme.breakpoints.down("sm")]: {
      WebkitLineClamp: 2,
    },
    opacity: 0.7,
  },
  movie: {
    opacity: 0.7,
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  title: { color: "white" },
}));

const MovieCard = ({ movie }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Card
      className={classes.card}
      sx={{
        borderRadius: "8px",
        backgroundColor: "rgba(16,79,115,0.94)",
        color: "white",
      }}
    >
      <CardActionArea
        component={Link}
        to={`/${movie.media_type}/${movie.id}`}
        className={classes.cardMedia}
      >
        <CardMedia
          component="img"
          image={movie.poster_path}
          alt={movie.title}
          title={movie.title}
          loading="lazy"
          className={classes.cardMedia}
          sx={{ borderRadius: 4 }}
        />
      </CardActionArea>

      <CardContent className={classes.cardContent}>
        <div>
          {/*<Box position="absolute" className={classes.doughnut}>*/}
          {/*    <CustomDonut vote_average={movie.vote_average} size={30}/>*/}
          {/*</Box>*/}
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="subtitle1"
              component={Link}
              to={`/${movie.media_type}/${movie.id}`}
              className={classes.title}
              sx={{ fontWeight: "700", lineHeight: "1.2" }}
            >
              {movie.title}
            </Typography>
            <IconButton
              size="small"
              onClick={() => dispatch(removeFromWatchlist(movie.id))}
              className={classes.removeButton}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography className={classes.movie}>
            {movie.release_date &&
              DateTime.fromISO(movie.release_date).toFormat("MMM dd, yyyy")}
          </Typography>
        </div>

        <div className={classes.overview}>
          <Typography>
            {movie.overview
              ? movie.overview
              : "This movie does not have any overview information"}
          </Typography>
        </div>
        <Box
          position="relative"
          display="flex"
          alignItems="center"
          style={{ opacity: 0.7 }}
        >
          <StarIcon />
          <Typography style={{ marginRight: 8 }}>
            {movie.vote_average * 10}%
          </Typography>
          <QueryStatsIcon />
          <Typography> {Math.floor(movie.popularity)}</Typography>
          {/*{isRemoving === movie.id && (*/}
          {/*	<CircularProgress size={40} className={classes.progress}/>*/}
          {/*)}*/}
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieCard;

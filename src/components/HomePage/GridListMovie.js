import { Box, Typography, makeStyles } from "@material-ui/core";

import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { DateTime } from "luxon";

const useStyles = makeStyles((theme) => ({
  gridListMovie: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    alignContent: "flex-start",
    width: 1300,
    boxSizing: "border-box",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "50%",
    backgroundPositionY: "50%",
    paddingTop: 30,
    paddingLeft: 40,
  },
  cardMedia: {
    height: 0,
    paddingTop: "150%",
    borderRadius: 8,
  },
  gridList: {
    flexGrow: 1,
    flexWrap: "nowrap",
  },
}));
const GridListMovie = ({ movies }) => {
  const classes = useStyles();
  return (
    <div className={classes.gridListMovie}>
      <ImageList
        rowHeight="auto"
        cols={7.5}
        gap={8}
        className={classes.gridList}
      >
        {movies.map((movie) => (
          <ImageListItem key={movie.id}>
            <CardActionArea>
              <CardMedia
                className={classes.cardMedia}
                image={movie.poster_path}
                title={movie.title}
              />
            </CardActionArea>
            <Box p={1} pt={2} position="relative">
              <Box></Box>
              <Typography variant="subtitle1">{movie.title}</Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {DateTime.fromISO(movie.release_date).toFormat("MMM dd, yyyy")}
              </Typography>
            </Box>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};
export default GridListMovie;

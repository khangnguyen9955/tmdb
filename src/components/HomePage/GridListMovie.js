import { Box, makeStyles, Typography } from "@material-ui/core";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { DateTime } from "luxon";

const useStyles = makeStyles((theme) => ({
  gridListMovie: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    minHeight: 360,
  },
  cardMedia: {},
  gridList: {},
}));
const GridListMovie = (movies) => {
  const classes = useStyles();

  return (
    <div className={classes.gridListMovie}>
      <ImageList>
        {movies.map((movie) => (
          <ImageListItem key={movie.id}>
            <CardActionArea>
              <CardMedia
                image={movie.poster_path}
                title={movie.title}
                className={classes.cardMedia}
              />
            </CardActionArea>
            <Box>
              <Box></Box>
              <Typography variant="subtittle2">{movie.title}</Typography>
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

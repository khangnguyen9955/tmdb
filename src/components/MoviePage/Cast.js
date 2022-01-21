import {
  Box,
  CardActionArea,
  CardContent,
  CardMedia,
  GridList,
  GridListTile,
  ImageList,
  ImageListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({}));
const Cast = ({ cast, media_type, id }) => {
  const classes = useStyles();
  console.log(cast);
  return (
    <>
      <div>
        <Typography gutterBottom>Top Billed Cast</Typography>
      </div>
      <div>
        <GridList cellHeight="auto" cols={2.5} spacing={8}>
          {cast.slice(0, 9).map((person) => (
            <ImageList>
              <ImageListItem className={classes.card}>
                <CardActionArea
                  className={classes.cardActionARea}
                  component={Link}
                  to={`/person/${person.id}`}
                >
                  <CardMedia
                    image={person.profile_path}
                    title={person.name}
                    className={classes.cardMedia}
                  />
                </CardActionArea>
                <Box m={1}>
                  <Typography
                    variant="subtitle1"
                    component={Link}
                    to={`/person/${person.id}`}
                  >
                    {person.name}
                  </Typography>
                  <Typography>{person.character}</Typography>
                </Box>
              </ImageListItem>
            </ImageList>
          ))}
          {cast.length >= 9 && (
            <ImageList className={classes.viewMore}>
              <Link to={`/${media_type}/${id}/cast`}>View More</Link>
            </ImageList>
          )}
        </GridList>
      </div>
    </>
  );
};

export default Cast;

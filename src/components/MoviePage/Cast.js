import {
  Box,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  GridList,
  GridListTile,
  ImageList,
  ImageListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  cast: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    flexGrow: 1,
    flexWrap: "nowrap",
  },
  card: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 4,
    minWidth: 140,
  },
  cardActionArea: {
    borderRadius: 8,
  },
  cardMedia: {
    paddingTop: "130%",
    height: 0,
    borderRadius: 8,
  },
  viewMore: {
    fontSize: "1em",
    alignItems: "center",
    alignContent: "center",
    fontWeight: "bold",
    display: "flex",
    margin: "auto",
  },
  textViewMore: {
    color: "black",
    fontSize: "1em",
    fontWeight: "bold",
  },
  name: { fontSize: 16, fontWeight: "bold", color: "black" },
  character: {
    fontSize: "0.9em",
  },
  fullCast: {
    fontWeight: 600,
    color: "black",
    fontSize: "1.1em",
  },
  fullCastDiv: {
    marginBottom: 30,
  },
  topCast: {
    fontWeight: 600,
    fontSize: "1.4em",
    marginTop: 20,
  },
}));
const Cast = ({ cast, media_type, id }) => {
  const classes = useStyles();
  return (
    <>
      <div>
        <Typography gutterBottom className={classes.topCast}>
          Top Billed Cast
        </Typography>
      </div>
      <div className={classes.cast}>
        <ImageList
          rowHeight="auto"
          cols={7.5}
          spacing={8}
          className={classes.gridList}
        >
          {cast.slice(0, 9).map((person) => (
            <ImageListItem key={person.id} className={classes.card}>
              <CardActionArea
                className={classes.cardActionArea}
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
                  component={Link}
                  to={`/person/${person.id}`}
                  className={classes.name}
                >
                  {person.name}
                </Typography>
                <Typography className={classes.character}>
                  {person.character}
                </Typography>
              </Box>
            </ImageListItem>
          ))}
          {cast.length >= 9 && (
            <ImageListItem item="true" className={classes.viewMore}>
              <Typography
                component={Link}
                to={`/${media_type}/${id}/cast`}
                className={classes.textViewMore}
              >
                View More
              </Typography>
            </ImageListItem>
          )}
        </ImageList>
      </div>
      <div className={classes.fullCastDiv}>
        <Typography
          className={classes.fullCast}
          component={Link}
          to={`/${media_type}/${id}/cast`}
        >
          Full Cast & Crew
        </Typography>
      </div>
      <Divider />
    </>
  );
};

export default Cast;

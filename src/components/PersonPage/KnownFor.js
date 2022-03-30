import { Link, makeStyles } from "@mui/material";
import React from "react";
import {
  Typography,
  ImageList,
  ImageListItem,
  CardActionArea,
  CardMedia,
  Box,
} from "@mui/material";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  imageListDiv: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  imageList: {
    flexGrow: 1,
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    marginBottom: "0 !important",
  },

  recommendation: {},
  title: {},
  cardMedia: { height: 0, paddingTop: "150%" },
}));
const KnownFor = ({ credits }) => {
  const classes = useStyles();
  const matches = useMediaQuery((theme) => {
    theme.breakpoints.down("sm");
  });
  return (
    <div>
      <div>
        <Typography className={classes.recommendation}>Known For</Typography>
      </div>
      {credits.length > 0 && (
        <div className={classes.imageListDiv}>
          <ImageList
            className={classes.imageList}
            cols={matches ? 2.5 : 6.5}
            rowHeight="auto"
            spacing={8}
          >
            {credits.slice(0, 9).map((credit) => (
              <ImageListItem key={credit.id}>
                <CardActionArea component={Link} to={`/movie/${credit.id}`}>
                  <CardMedia
                    component="img"
                    image={credit.backdrop_path}
                    title={credit.title}
                    alt={credit.title}
                    className={classes.cardMedia}
                  />
                </CardActionArea>
                <Box display="flex" justifyContent="space-between">
                  <Typography
                    className={classes.title}
                    component={Link}
                    to={`/movie/${credit.id}`}
                  >
                    {credit.title}
                  </Typography>
                  <Typography>
                    {Math.round(credit.vote_average * 10) + "%"}
                  </Typography>
                </Box>
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      )}
    </div>
  );
};
export default KnownFor;

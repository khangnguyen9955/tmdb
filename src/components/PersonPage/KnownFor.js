import { makeStyles } from "@mui/styles";
import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
const useStyles = makeStyles((theme) => ({
  imageListDiv: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  imageList: {
    flexGrow: 1,
    flexWrap: "nowrap !important",
    transform: "translateZ(0)",
    marginBottom: "0 !important",
    overflowX: "scroll",
    overflowY: "hidden",
  },
  card: {
    marginLeft: "12px ",
    maxWidth: 195,
    width: "130px !important",
  },
  cardActionArea: {
    borderRadius: 8,
    width: 130,
    height: 195,
  },
  title: {
    fontSize: "0.9em",
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    paddingTop: 8,
  },
  cardMedia: {
    paddingTop: "130%",
    height: "100%",
    borderRadius: 8,
  },
  knownFor: {
    fontSize: "1.3em !important",
    fontWeight: "600 !important",
  },
}));
const KnownFor = ({ credits }) => {
  const classes = useStyles();
  // const matches = useMediaQuery((theme) => {
  //   theme.breakpoints.down("sm");
  // });
  console.log(credits.slice(0, 9));
  return (
    <>
      <div>
        <Typography className={classes.knownFor}>Known For</Typography>
      </div>
      {credits.length > 0 && (
        <div className={classes.imageListDiv}>
          <ImageList
            cols={7.5}
            rowHeight="auto"
            spacing={8}
            className={classes.imageList}
          >
            {credits.slice(0, 9).map((credit) => (
              <ImageListItem key={credit.id} className={classes.card}>
                <CardActionArea
                  component={Link}
                  className={classes.cardActionArea}
                  to={`/movie/${credit.id}`}
                >
                  <CardMedia
                    image={credit.poster_path}
                    title={credit.title}
                    className={classes.cardMedia}
                  />
                </CardActionArea>
                <Typography
                  className={classes.title}
                  component={Link}
                  to={`/movie/${credit.id}`}
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "0.9em",
                  }}
                >
                  {credit.title}
                </Typography>
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      )}
    </>
  );
};
export default KnownFor;

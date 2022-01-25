import {
  Box,
  CardActionArea,
  CardMedia,
  ImageList,
  ImageListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { fontWeight } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  div: { marginTop: 20, marginBottom: 20 },
  title: { color: "black", fontWeight: 600, fontSize: "1em" },
  imageList: {
    flexGrow: 1,
    flexWrap: "nowrap",
  },
  recommendation: {
    fontWeight: 600,
    fontSize: "1.4em",
    marginBottom: 20,
  },
  imageListDiv: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  cardMedia: { borderRadius: 8, marginBottom: 10 },
}));
const Recommendations = ({ recommendations, media_type }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.div}>
        <div>
          <Typography className={classes.recommendation}>
            Recommendations
          </Typography>
        </div>
        {recommendations.length > 0 ? (
          <div className={classes.imageListDiv}>
            <ImageList
              className={classes.imageList}
              cols={3.5}
              cellHeight="auto"
              spacing={16}
            >
              {recommendations.slice(0, 9).map((recommendation) => (
                <ImageListItem key={recommendation.id}>
                  <CardActionArea
                    component={Link}
                    to={`/${media_type}/${recommendation.id}`}
                  >
                    <CardMedia
                      component="img"
                      image={recommendation.backdrop_path}
                      title={recommendation.title}
                      alt={recommendation.title}
                      className={classes.cardMedia}
                    />
                  </CardActionArea>
                  <Box display="flex" justifyContent="space-between">
                    <Typography
                      className={classes.title}
                      component={Link}
                      to={`/${media_type}/${recommendation.id}`}
                      noWrap
                    >
                      {recommendation.title}
                    </Typography>
                    <Typography>
                      {Math.round(recommendation.vote_average * 10) + "%"}
                    </Typography>
                  </Box>
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        ) : (
          <Typography>
            We don't have enough data to suggest any movies based on Santana.
            You can help by rating movies you've seen.
          </Typography>
        )}
      </div>
    </>
  );
};

export default Recommendations;

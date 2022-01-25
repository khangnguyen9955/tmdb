import {
  Box,
  CardMedia,
  Divider,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    height: "100%",
    width: "auto",
    marginTop: 20,
    borderRadius: 8,
  },
  cardVideo: {
    height: "100%",
    width: 533,
    marginTop: 20,
    borderRadius: 8,
  },
  tabs: { marginLeft: 40 },
  tab: {
    minWidth: 10,
    fontWeight: 600,
    fontSize: "1rem",
  },
  media: {
    fontSize: "1.4em",
    fontWeight: 600,
  },
  div: { marginTop: 30, marginBottom: 30 },
}));
const Media = ({ details }) => {
  const [value, setValue] = useState(0);
  const classes = useStyles();

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={classes.div}>
        <Box display="flex" alignItems="baseline">
          <Typography className={classes.media} gutterBottom>
            Media
          </Typography>

          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            className={classes.tabs}
          >
            <Tab label="Video" className={classes.tab} />
            <Tab label="Backdrop" className={classes.tab} />
            <Tab label="Poster" className={classes.tab} />
          </Tabs>
        </Box>
        <Box display="flex" alignItems="center" height={300}>
          {value === 0 &&
            (details.videos.key ? (
              <CardMedia
                component="iframe"
                className={classes.cardVideo}
                src={details.videos.key}
              />
            ) : (
              <Typography> There video is unavailable</Typography>
            ))}

          {value === 1 && (
            <CardMedia
              component="img"
              image={details.backdrop_path}
              title={details.title}
              alt={details.title}
              loading="lazy"
              className={classes.cardMedia}
            />
          )}

          {value === 2 && (
            <CardMedia
              component="img"
              image={details.poster_path}
              title={details.title}
              alt={details.title}
              loading="lazy"
              className={classes.cardMedia}
            />
          )}
        </Box>
      </div>
      <Divider />
    </>
  );
};

export default Media;

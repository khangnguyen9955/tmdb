import React from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  gridItem: {
    justifyContent: "space-between",
    marginBottom: 20,
  },
  title: {
    fontWeight: 700,
    fontSize: "1.5em",
    width: "100%",
    fontFamily: "'Source Sans Pro', Arial, sans-serif",
  },
  titleStats: {
    color: "rgba(3,37,65,1)",
    margin: "0 0 6px 0",
    fontSize: "1.2em",
    fontWeight: 500,
  },
  contentStats: {
    fontSize: "3.6em",
    lineHeight: 1,
    margin: 0,
    fontWeight: 700,
    color: "#805be7",
  },
  link: {
    color: "#805be7",
    cursor: "pointer",
  },
}));

const Overview = (props) => {
  const classes = useStyles();

  const handleNavigateWatchlist = () => {
    props.handleNavigateWatchlist();
  };

  return (
    <Grid container>
      <Grid container item className={classes.gridItem}>
        <Typography className={classes.title}>Stats</Typography>

        <Box>
          <Typography className={classes.titleStats}> Total edits</Typography>
          <Typography className={classes.contentStats}>0</Typography>
        </Box>
        <Box>
          <Typography className={classes.titleStats}> Total ratings</Typography>
          <Typography className={classes.contentStats}>0</Typography>
        </Box>
        <Box>
          <Typography className={classes.titleStats}> Total edits</Typography>
          <Typography>You haven't logged any movies or TV shows.</Typography>
        </Box>
      </Grid>
      <Grid item container className={classes.gridItem}>
        <Typography className={classes.title}>
          Upcoming From Watchlist
        </Typography>
        <Typography>There are no upcoming movies on your watchlist.</Typography>
        <Typography className={classes.link} onClick={handleNavigateWatchlist}>
          Go to your watchlist
        </Typography>
      </Grid>
      <Grid container item className={classes.gridItem}>
        <Typography className={classes.title}>Recent Discussions</Typography>

        <Typography>You are not watching any discussions.</Typography>
      </Grid>
      <Grid
        container
        item
        className={classes.gridItem}
        style={{ marginBottom: 60 }}
      >
        <Typography className={classes.title}>Recent Activity</Typography>

        <Typography>You haven't made any recent edits.</Typography>
        <Typography className={classes.link}>View more</Typography>
      </Grid>
    </Grid>
  );
};

export default Overview;

import React from "react";
import { Grid, makeStyles, Tab, Tabs, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  tabs: {
    alignItems: "center",

    "& .MuiTabs-indicator": {
      marginBottom: 10,
      backgroundColor: "#805be7",
    },
    "& button": {
      minWidth: 50,
      minHeight: 30,
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  grid: {
    display: "flex",
    alignItems: "baseline",
  },
  watchlistTitle: {
    fontWeight: 700,
    fontSize: "1.5em",
    fontFamily: "'Source Sans Pro', Arial, sans-serif",
  },
  type: {
    color: "#000",
    fontSize: "1em",
    fontWeight: "normal",
    marginLeft: 20,
    textTransform: "initial",
    marginBottom: 10,
  },
}));

const FilterGroup = ({
  totalMovie,
  totalTV,
  type,
  handleChangeType,
  groupTitle,
}) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md="auto" className={classes.grid}>
      <Typography className={classes.watchlistTitle}>{groupTitle}</Typography>
      <Tabs
        value={type}
        onChange={handleChangeType}
        indicatorColor="primary"
        textColor="primary"
        className={classes.tabs}
      >
        <Tab
          className={classes.type}
          disableRipple
          label={"Movie: " + totalMovie}
          value="movie"
        />

        <Tab
          className={classes.type}
          disableRipple
          label={"TV: " + totalTV}
          value="tv"
        />
      </Tabs>
    </Grid>
  );
};

export default FilterGroup;

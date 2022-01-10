import { makeStyles } from "@material-ui/core";
import { Box, Card, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  title: {
    backgroundColor: "rgba(1,180,228,1)",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-between",
    padding: "20px",
    color: "#fff",
  },
  tabs: { width: 260, minWidth: 260 },
  tab: {
    display: "inline-flex",
    justifyContent: "space-between",
    padding: "24px 12px",
  },
  label: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  total: { padding: "0 5px", border: "1px solid black", borderRadius: 10 },
}));
const SearchResults = ({
  moviesResults,
  tvShowsResults,
  peopleResults,
  companiesResults,
  collectionsResults,
  keywordsResults,
  params,
}) => {
  const classes = useStyles();
  const allTabs = [
    {
      type: "movie",
      label: "Movies",
      total_result: moviesResults,
    },
    {
      type: "tv",
      label: "TV Shows",
      total_result: tvShowsResults,
    },
    {
      type: "person",
      label: "People",
      total_result: peopleResults,
    },
    {
      type: "company",
      label: "Companies",
      total_result: companiesResults,
    },
    {
      type: "collection",
      label: "Collections",
      total_result: collectionsResults,
    },
    {
      type: "keyword",
      label: "Keywords",
      total_result: keywordsResults,
    },
  ];
  return (
    <Card>
      <Box>
        <Typography className={classes.title}>Search Results</Typography>
      </Box>
      <Tabs
        orientation="vertical"
        variant="fullWidth"
        indicatorColor="primary"
        value={params.type}
        className={classes.tabs}
      >
        {allTabs.map((tab) => (
          <Tab
            key={tab.type}
            component={Link}
            to={`/search/${tab.type}/${params.query}/1`}
            selected={tab.type === params.type}
            value={tab.type}
            className={classes.tab}
            label={
              <Typography className={classes.label}>
                {tab.label}
                <span className={classes.total}>{tab.total_result}</span>
              </Typography>
            }
          />
        ))}
      </Tabs>
    </Card>
  );
};

export default SearchResults;

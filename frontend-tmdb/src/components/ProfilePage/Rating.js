import React, { useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import FilterGroup from "./FilterGroup";
import Filter from "./Filter";

const Rating = () => {
  const [ratingType, setRatingType] = useState("movie");

  const handleChangeRatingType = (event, newValue) => {
    setRatingType(newValue);
  };
  const [sortBy, setSortBy] = useState("date_added");
  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };
  return (
    <>
      <Grid container justifyContent="space-between">
        <FilterGroup
          totalMovie={0}
          totalTV={0}
          type={ratingType}
          handleChangeType={handleChangeRatingType}
          groupTitle={"My Rating"}
        />
        <Filter sortBy={sortBy} handleSortBy={handleSortBy} />
      </Grid>
      <Grid container justifyContent="space-between">
        <Typography>You haven't rated any movies.</Typography>
        <Box
          style={{
            minWidth: 260,
            width: 260,
            marginTop: 5,
            overflow: "hidden",
            border: "1px solid  rgba(227,227,227,1)",
            borderRadius: 8,
            background: "#fff",
          }}
        >
          <Typography
            style={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              fontWeight: 600,
              color: "#fff",
              backgroundColor: "rgba(128,91,231,1)",
              padding: 20,
            }}
          >
            <TipsAndUpdatesIcon />
            Tip
          </Typography>
          <Typography style={{ margin: 20 }}>
            You are not watching any discussions.
          </Typography>
        </Box>
      </Grid>
    </>
  );
};

export default Rating;

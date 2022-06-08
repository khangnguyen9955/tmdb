import React, { useState } from "react";
import Background from "../common/Background";
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import ProfileHeader from "./ProfileHeader";
import { Divider } from "@mui/material";
import { useSelector } from "react-redux";
import FilterGroup from "./FilterGroup";
import Filter from "./Filter";
import MovieCard from "./MovieCard";
import Rating from "./Rating";
import List from "./List";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },

  gridItem: {
    marginBottom: 20,
    marginTop: 20,
    justifyContent: "space-between",
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
  item: {
    padding: "6px 0 4px 0",
    marginRight: 40,
    borderBottom: "4px solid #fff",
  },
  tabs: {
    marginLeft: 5,
    "& .MuiTabs-flexContainer": {
      overflowY: "hidden",
    },
    "& button": {
      minWidth: 20,
      textTransform: "initial",
      fontSize: "1em",
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "#805be7",
    },
  },
}));

const ProfilePage = () => {
  const {currentUser} = useSelector((state) => state.auth);
  const {isAuth} = useSelector((state) => state.auth);
  const {watchlist} = useSelector((state) => state.watchlist);
  const [type, setType] = useState("movie");
  const totalTv = watchlist.filter((movie) => movie.media_type === "tv");
  const totalMovie = watchlist.filter((movie) => movie.media_type === "movie");
  const [sortBy, setSortBy] = useState("date_added");

  const handleChangeType = (event, newValue) => {
    setType(newValue);
  };
  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };
  const [category, setCategory] = useState(0);
  const classes = useStyles();

  function handleChangeCategory(event, newValue) {
    setCategory(newValue);
  }

  function handleNavigateWatchlist() {
    setCategory(3);
  }

  return (
      <>
        <div style={{position: "relative", width: "100%"}}>
          <Background children={<ProfileHeader user={currentUser}/>}/>
        </div>
        <Box className={classes.container}>
          <Tabs
              className={classes.tabs}
              value={category}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChangeCategory}
          >
            <Tab className={classes.item} label="Overview" disableRipple/>
            <Tab disableRipple className={classes.item} label="Discussion"/>
            <Tab disableRipple className={classes.item} label="Rating"/>
            <Tab disableRipple className={classes.item} label="Watchlist"/>
            <Tab disableRipple className={classes.item} label="Lists"/>
          </Tabs>
        </Box>
        <Divider/>

        <Container>
          {category === 0 && (
              <Grid container>
                <Grid container item className={classes.gridItem}>
                  <Typography className={classes.title}>Stats</Typography>

                  <Box>
                    <Typography className={classes.titleStats}>
                      {" "}
                      Total edits
                    </Typography>
                    <Typography className={classes.contentStats}>0</Typography>
                  </Box>
                  <Box>
                    <Typography className={classes.titleStats}>
                      {" "}
                      Total ratings
                    </Typography>
                    <Typography className={classes.contentStats}>0</Typography>
                  </Box>
                  <Box>
                    <Typography className={classes.titleStats}>
                      {" "}
                      Total edits
                    </Typography>
                    <Typography>
                      You haven't logged any movies or TV shows.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item container className={classes.gridItem}>
                  <Typography className={classes.title}>
                    Upcoming From Watchlist
                  </Typography>
                  <Typography>
                    There are no upcoming movies on your watchlist.
                  </Typography>
                  <Typography
                      className={classes.link}
                      onClick={handleNavigateWatchlist}
                  >
                    Go to your watchlist
                  </Typography>
                </Grid>
                <Grid container item className={classes.gridItem}>
                  <Typography className={classes.title}>
                    Recent Discussions
                  </Typography>

                  <Typography>You are not watching any discussions.</Typography>
                </Grid>
                <Grid
                    container
                    item
                    className={classes.gridItem}
                    style={{marginBottom: 60}}
                >
                  <Typography className={classes.title}>Recent Activity</Typography>

                  <Typography>You haven't made any recent edits.</Typography>
                  <Typography className={classes.link}>View more</Typography>
                </Grid>
              </Grid>
          )}
          {category === 1 && (
              <Grid container className={classes.grid}>
                <Grid container item className={classes.gridItem}>
                  <Typography className={classes.title}>My Discussions</Typography>
                  <Grid
                      container
                      item
                      style={{display: "flex", justifyContent: "space-between"}}
                      xs={12}
                  >
                    <Typography
                        noWrap
                        style={{
                          marginTop: 5,

                          maxHeight: 50,
                          width: "70%",
                          border: "1px solid  rgba(227,227,227,1)",
                          borderRadius: 8,
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "12px 20px",
                          color: "#000",
                          background: "#fff",
                          boxShadow: " 0 2px 8px rgb( 0 0 0 / 10%)",
                        }}
                    >
                      You are not watching any discussions.
                    </Typography>
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
                            justifyContent: "space-between",
                            fontWeight: 600,
                            color: "#fff",
                            backgroundColor: "rgba(128,91,231,1)",
                            padding: 20,
                          }}
                      >
                        My Active boards
                      </Typography>
                      <Typography style={{margin: 20}}>
                        You are not watching any discussions.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
          )}
          {category === 2 && <Rating/>}
          {category === 3 && (
              <>
                <Grid
                    container
                    justifyContent="space-between"
                    className={classes.gridItem}
                >
                  <FilterGroup
                      totalMovie={totalMovie.length}
                      totalTV={totalTv.length}
                      type={type}
                      handleChangeType={handleChangeType}
                  />
                  <Filter sortBy={sortBy} handleSortBy={handleSortBy}/>
                </Grid>
                {type === "movie" &&
                    totalMovie
                        .sort((a, b) =>
                            sortBy === "date_added"
                                ? new Date(b.createdAt) - new Date(a.createdAt)
                                : sortBy === "release_date"
                                    ? new Date(b.release_date) - new Date(a.release_date)
                                    : b.popularity - a.popularity
                        )
                        .map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
                {type === "tv" &&
                    totalTv
                        .sort((a, b) =>
                            sortBy === "date_added"
                                ? new Date(b.createdAt) - new Date(a.createdAt)
                                : sortBy === "release_date"
                                    ? new Date(b.release_date) - new Date(a.release_date)
                                    : b.popularity - a.popularity
                        )
                        .map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
                {watchlist.length === 0 && (
                    <Typography style={{margin: 20}}>
                      You haven't added any movies in your watchlist.
                    </Typography>
                )}
              </>
          )}
          {category === 4 && (
              <List/>
          )}

        </Container>
      </>
  );
};

export default ProfilePage;

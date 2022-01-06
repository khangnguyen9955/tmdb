import { CircularProgress, Container, Grid, Typography } from "@mui/material";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../common/Loading";
import { Box, makeStyles } from "@material-ui/core";
import popularMovies from "../../api/popularMovies";
import popularPeople from "../../api/popularPeople";
import popularTvShows from "../../api/popularTvShows";
import PopularMovies from "./PopularMovies";
import PopularTVShows from "./PopularTvShows";
import PopularPeople from "./PopularPeople";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: 64,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 40,
    paddingRight: 40,
    alignContent: "flex-start",
    maxWidth: 1100,
    width: 1100,
    justifyContent: "space-between",
  },
}));

const PopularPage = () => {
  const classes = useStyles();
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(true);
  const [resultsLoading, setResultsLoading] = useState(true);
  const params = useParams();
  const page = parseInt(params.page);
  const { query, type } = params;
  useEffect(() => {
    const fetchData = async () => {
      setResultsLoading(true);
      const searchResults = await Promise.all([
        popularMovies(page),
        popularTvShows(page),
        popularPeople(page),
      ]);
      const [movies, tvShows, people] = searchResults;
      setResults({ movies, tvShows, people });
      setLoading(false);
      setResultsLoading(false);
    };
    fetchData();
  }, [type, page]);
  return loading ? (
    <Loading />
  ) : resultsLoading ? (
    <Box
      height={350}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />
    </Box>
  ) : (
    <Container className={classes.main}>
      <Grid container className={classes.container}>
        {type === "movie" && (
          <>
            <Box width="100%" marginBottom={2}>
              <Typography fontSize="1.6em" fontWeight={700}>
                Popular Movies
              </Typography>
            </Box>

            <PopularMovies movies={results.movies} params={params} />
          </>
        )}
        {type === "tv" && (
          <>
            <Box width="100%" marginBottom={2}>
              <Typography fontSize="1.6em" fontWeight={700}>
                Popular Tv Shows
              </Typography>
            </Box>
            <PopularTVShows tvShows={results.tvShows} params={params} />
          </>
        )}
        {type === "person" && (
          <>
            <Box width="100%" marginBottom={2}>
              <Typography fontSize="1.6em" fontWeight={700}>
                Popular People
              </Typography>
            </Box>
            <PopularPeople people={results.people} params={params} />
          </>
        )}
      </Grid>
    </Container>
  );
};

export default PopularPage;

import { CircularProgress, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../common/Loading";
import { Box, makeStyles } from "@material-ui/core";
import SearchTvShows from "./SearchTvShows";
import SearchPeople from "./SearchPeople";
import SearchMovies from "./SearchMovies";
import SearchCollections from "./SearchCollections";
import SearchCompanies from "./SearchCompanies";
import SearchKeywords from "./SearchKeywords";
import searchMovies from "../../api/searchMovies";
import searchTvShows from "../../api/searchTvShows";
import searchPeople from "../../api/searchPeople";
import searchCollections from "../../api/searchCollections";
import searchCompanies from "../../api/searchCompanies";
import searchKeywords from "../../api/searchKeywords";
import SearchResults from "./SearchResults";
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
    maxWidth: 1300,
    width: 1300,
    justifyContent: "space-between",
  },
}));

const SearchPage = () => {
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
        searchMovies(query, page),
        searchTvShows(query, page),
        searchPeople(query, page),
        searchCollections(query, page),
        searchCompanies(query, page),
        searchKeywords(query, page),
      ]);
      const [movies, tvShows, people, collections, companies, keywords] =
        searchResults;
      setResults({ movies, tvShows, people, collections, companies, keywords });
      setLoading(false);
      setResultsLoading(false);
    };
    fetchData();
  }, [query, page]);
  console.log(results);
  console.log(query);
  console.log(page);

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
    <Container className={classes.main} sx={{ minWidth: 1300 }}>
      <Grid container spacing={3} className={classes.container}>
        <Grid item md={3} xs={12}>
          <SearchResults
            tvShowsResults={results.tvShows.total_results}
            moviesResults={results.movies.total_results}
            peopleResults={results.people.total_results}
            companiesResults={results.companies.total_results}
            collectionsResults={results.collections.total_results}
            keywordsResults={results.keywords.total_results}
            params={params}
          />
        </Grid>
        <Grid item md={9} xs={12}>
          {resultsLoading ? (
            <Box
              height={350}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <CircularProgress />
            </Box>
          ) : (
            <>
              {type === "movie" && (
                <>
                  <SearchMovies movies={results.movies} params={params} />
                </>
              )}
              {type === "tv" && (
                <>
                  <SearchTvShows tvShows={results.tvShows} params={params} />
                </>
              )}
              {type === "person" && (
                <>
                  <SearchPeople people={results.people} params={params} />
                </>
              )}
              {type === "collection" && (
                <>
                  <SearchCollections
                    collections={results.collections}
                    params={params}
                  />
                </>
              )}
              {type === "company" && (
                <>
                  <SearchCompanies
                    companies={results.companies}
                    params={params}
                  />
                </>
              )}
              {type === "keyword" && (
                <>
                  <SearchKeywords keywords={results.keywords} params={params} />
                </>
              )}
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchPage;

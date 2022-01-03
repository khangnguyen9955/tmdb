import { CircularProgress, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Movies from "./Movies";
import Companies from "./Companies";
import People from "./People";
import Collections from "./Collections";
import Keywords from "./Keywords";
import TVShows from "./TVShows";
import searchMovies from "../../api/searchMovies";
import searchCollections from "../../api/searchCollections";
import searchCompanies from "../../api/searchCompanies";
import searchKeywords from "../../api/searchKeywords";
import searchPeople from "../../api/searchPeople";
import searchTvShows from "../../api/searchTvShows";
import { useParams } from "react-router-dom";
import Loading from "../common/Loading";
import { Box } from "@material-ui/core";
const SearchPage = () => {
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
        searchCollections(query, page),
        searchCompanies(query, page),
        searchKeywords(query, page),
        searchPeople(query, page),
        searchTvShows(query, page),
      ]);
      const [movies, companies, people, tvShows, collections, keywords] =
        searchResults;
      setResults({ movies, companies, people, tvShows, collections, keywords });
      setLoading(false);
      setResultsLoading(false);
    };
    fetchData();
  }, [query, page]);
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
    <Container>
      <Grid container>
        {type === "movie" && <Movies movies={results.movies} params={params} />}
        {type === "tv" && <TVShows tvShows={results.tvShows} params={params} />}
        {type === "person" && (
          <People people={results.people} params={params} />
        )}
        {type === "company" && (
          <Companies companies={results.companies} params={params} />
        )}
        {type === "collection" && (
          <Collections collections={results.collections} params={params} />
        )}
        {type === "keyword" && (
          <Keywords keywords={results.keywords} params={params} />
        )}
      </Grid>
    </Container>
  );
};

export default SearchPage;

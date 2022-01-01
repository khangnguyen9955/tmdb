import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Movies from "./Movies";
import TVShows from "./TVShows";
import Company from "./Company";
import People from "./People";
import Collection from "./Collection";
import Keywords from "./Keywords";
import searchMovies from "../../api/searchMovies";
const SearchPage = ({ match }) => {
  const [results, setResults] = useState({});
  const params = match.params;
  const page = parseInt(params.page);
  const { query, type } = params;
  useEffect(() => {
    const fetchData = async () => {
      const searchResults = await Promise.all([searchMovies(query, page)]);
      const [movies, company, people, tvShow, collection, keywords] =
        searchResults;
      setResults([movies, company, people, tvShow, collection, keywords]);
    };
    fetchData();
  }, [query, page]);
  return (
    <Container>
      <Grid container>
        {type === "movie" && <Movies movies={results.movie} params={params} />}
        {type === "company" && (
          <Company company={results.company} params={params} />
        )}
        {type === "people" && (
          <People people={results.people} params={params} />
        )}
        {type === "tvShow" && (
          <TVShows tvShow={results.tvShow} params={params}></TVShows>
        )}
        {type === "collection" && (
          <Collection collections={results.collection} params={params} />
        )}
        {type === "keyword" && (
          <Keywords keywords={results.keywords} params={params} />
        )}
      </Grid>
    </Container>
  );
};

export default SearchPage;

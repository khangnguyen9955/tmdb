import { Typography } from "@material-ui/core";
import React from "react";
import SearchCard from "../common/SearchCard";
import SearchPagination from "../SearchPage/SearchPagination";

function SearchMovies({ movies, params }) {
  return movies.results.length > 0 ? (
    <>
      {movies.results.map((movie) => (
        <SearchCard key={movie.id} details={movie} media_type={params.type} />
      ))}
      <SearchPagination total_pages={movies.total_pages} params={params} />
    </>
  ) : (
    <Typography>There are no movies that matched your query.</Typography>
  );
}

export default SearchMovies;

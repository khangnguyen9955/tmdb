import { Typography } from "@material-ui/core";
import React from "react";
import MovieCard from "../common/MovieCard";
import SearchCard from "../common/SearchCard";
import SearchPagination from "../PopularPage/SearchPagination";

function SearchMovies({ movies, params }) {
  return movies.results.length > 0 ? (
    <>
      {movies.results.map((movie) => (
        <SearchCard key={movie.id} details={movie} media_type={params.type} />
      ))}
      <SearchPagination total_pages={movies.total_pages} params={params} />
    </>
  ) : (
    <Typography>!!!</Typography>
  );
}
export default SearchMovies;

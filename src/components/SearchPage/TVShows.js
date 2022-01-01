import React from "react";
import { Typography } from "@mui/material";
import MovieCard from "../common/MovieCard";
import SearchPagination from "./SearchPagination";
const TVShows = ({ movies, params }) => {
  return movies.results.length > 0 ? (
    <>
      {movies.results.map((movie) => (
        <MovieCard key={movie.id} details={movie} media_type={params.type} />
      ))}
      <SearchPagination total_pages={movies.total_pages} params={params} />
    </>
  ) : (
    <Typography>There are no TV Shows. </Typography>
  );
};

export default TVShows;

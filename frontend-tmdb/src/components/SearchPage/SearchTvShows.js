import { Typography } from "@material-ui/core";
import React from "react";
import SearchCard from "../common/SearchCard";
import SearchPagination from "../SearchPage/SearchPagination";

const SearchTvShows = ({ tvShows, params }) => {
  return tvShows.results.length > 0 ? (
    <>
      {tvShows.results.map((tvShow) => (
        <SearchCard key={tvShow.id} details={tvShow} media_type={params.type} />
      ))}
      <SearchPagination total_pages={tvShows.total_pages} params={params} />
    </>
  ) : (
    <Typography>There are no TV Shows that matched your query.</Typography>
  );
};

export default SearchTvShows;

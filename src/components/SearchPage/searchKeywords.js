import { Typography } from "@material-ui/core";
import React from "react";
import MovieCard from "../common/MovieCard";
import SearchPagination from "../PopularPage/SearchPagination";

function SearchKeywords({ keywords, params }) {
  return keywords.results.length > 0 ? (
    <>
      {keywords.results.map((keyword) => (
        <MovieCard
          key={keyword.id}
          details={keyword}
          media_type={params.type}
        />
      ))}
      <SearchPagination total_pages={keywords.total_pages} params={params} />
    </>
  ) : (
    <Typography>!!!</Typography>
  );
}
export default SearchKeywords;

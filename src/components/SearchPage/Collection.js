import { Typography } from "@material-ui/core";
import React from "react";
import MovieCard from "../common/MovieCard";
import SearchPagination from "./SearchPagination";

function Collection({ collections, params }) {
  return collections.results.length > 0 ? (
    <>
      {collections.results.map((collection) => (
        <MovieCard
          key={collection.id}
          details={collection}
          media_type={params.type}
        />
      ))}
      <SearchPagination total_pages={collections.total_pages} params={params} />
    </>
  ) : (
    <Typography>!!!</Typography>
  );
}
export default Collection;

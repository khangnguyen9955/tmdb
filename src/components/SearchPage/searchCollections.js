import { Typography } from "@material-ui/core";
import React from "react";
import MovieCard from "../common/MovieCard";
import SearchCard from "../common/SearchCard";
import SearchPagination from "../PopularPage/SearchPagination";

function SearchCollections({ collections, params }) {
  return collections.results.length > 0 ? (
    <>
      {collections.results.map((collection) => (
        <SearchCard
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
export default SearchCollections;

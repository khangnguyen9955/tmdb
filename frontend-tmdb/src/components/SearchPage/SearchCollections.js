import { Typography } from "@material-ui/core";
import React from "react";
import SearchCard from "../common/SearchCard";
import SearchPagination from "../SearchPage/SearchPagination";

const SearchCollections = ({ collections, params }) => {
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
    <Typography>There are no collections that matched your query.</Typography>
  );
};
export default SearchCollections;

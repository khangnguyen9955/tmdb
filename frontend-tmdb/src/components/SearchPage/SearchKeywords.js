import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import SearchPagination from "../SearchPage/SearchPagination";

const useStyles = makeStyles((theme) => ({
  title: {
    textDecoration: "none",
    color: "black",
  },
}));
const SearchKeywords = ({ keywords, params }) => {
  const classes = useStyles();
  return keywords.results.length > 0 ? (
    <>
      {keywords.results.map((keyword) => (
        <Typography key={keyword.id}>
          <Link to={`/keyword/${keyword.id}`} className={classes.title}>
            {keyword.name}
          </Link>
        </Typography>
      ))}
      <SearchPagination total_pages={keywords.total_pages} params={params} />
    </>
  ) : (
    <Typography>There are no keywords that matched your query.</Typography>
  );
};
export default SearchKeywords;

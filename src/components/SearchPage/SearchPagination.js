import React from "react";
import { Pagination } from "@mui/material";
import { Box } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
const SearchPagination = (total_pages, params) => {
  const history = useNavigate();
  const handleChange = (e, newPage) => {
    history.push(`/search/${params.type}/${params.query}/${newPage}`);
  };
  return (
    total_pages > 1 && (
      <Box display="flex" justifyContent="center" mt={2}>
        <Pagination
          count={total_pages}
          page={parseInt(params.page)}
          onChange={handleChange}
          shape="rounded"
          size="medium"
        />
      </Box>
    )
  );
};

export default SearchPagination;

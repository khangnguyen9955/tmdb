import React from "react";
import { Pagination } from "@mui/material";
import { Box } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  main: {
    marginTop: 30,
    maxWidth: "100%",
    width: "100%",
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
const SearchPagination = ({ total_pages, params }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleChange = (e, newPage) => {
    navigate(`/search/${params.type}/${params.query}/${newPage}`);
  };
  return (
    total_pages > 1 && (
      <Box className={classes.main} mt={2}>
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

import { makeStyles, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SearchPagination from "../PopularPage/SearchPagination";

const useStyles = makeStyles(() => ({
  link: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "black",
  },
}));

function SearchCompanies({ companies, params }) {
  console.log(companies);
  const classes = useStyles();
  return companies.results.length > 0 ? (
    <>
      {companies.results.map((company) => (
        <Box
          key={company.id}
          display="flex"
          alignItems="center"
          height="40px"
          borderBottom="1px solid #ccc"
        >
          <Link to={`/company/${company.id}`} className={classes.link}>
            {company.logo_path ? (
              <img
                src={company.logo_path}
                title={company.name}
                alt={company.name}
              />
            ) : (
              <Typography>{company.name}</Typography>
            )}
            {company.origin_country && (
              <Box
                component="span"
                color="black"
                ml={1}
                px={1}
                bgcolor="#ccc"
                borderRadius="10px"
              >
                {company.origin_country}
              </Box>
            )}
          </Link>
        </Box>
      ))}
      <SearchPagination total_pages={companies.total_pages} params={params} />
    </>
  ) : (
    <Typography>!!!</Typography>
  );
}
export default SearchCompanies;

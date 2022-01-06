import { Typography } from "@material-ui/core";
import { Box, CardActionArea, CardContent, CardMedia } from "@mui/material";
import React from "react";
import SearchPagination from "../PopularPage/SearchPagination";

function SearchPeople({ people, params }) {
  console.log(people);
  return people.results.length > 0 ? (
    <>
      {people.results.map((person) => (
        <Box>
          <CardActionArea>
            <CardMedia
              component="img"
              image={person.profile_path}
              title={person.name}
              alt={person.name}
              loading="lazy"
            />
          </CardActionArea>
          <CardContent>
            <Typography>{person.name}</Typography>
            <Typography>
              {person.known_for &&
                person.known_for.map((movie) => (
                  <Typography>{movie.title}</Typography>
                ))}
            </Typography>
          </CardContent>
        </Box>
      ))}
      <SearchPagination total_pages={people.total_pages} params={params} />
    </>
  ) : (
    <Typography>!!!</Typography>
  );
}
export default SearchPeople;

import { makeStyles } from "@material-ui/core";
import {
  Box,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SearchPagination from "./SearchPagination";
const useStyles = makeStyles(() => ({
  cardMedia: {
    width: "235",
    height: "235",
  },
  container: {
    width: 240,
    display: "block",
    flexWrap: "wrap",
    alignContent: "flex-start",
    border: "1px solid #e3e3e3",
    borderRadius: 8,
    marginBottom: 24,
    height: 500,
  },
  cardContent: {
    whiteSpace: "normal",
    flexWrap: "wrap",
    alignContent: "flex-start",
    padding: "8px 10px",
    width: "100%",
    whiteSpace: "nowrap",
  },
  detail: {
    fontSize: "0.9em",
    fontWeight: 400,
    color: "rgba(0,0,0,0.6)",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

const PopularPeople = ({ people, params }) => {
  const classes = useStyles();

  return people.results.length > 0 ? (
    <>
      {people.results.map((person) => (
        <Box className={classes.container}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={person.profile_path}
              title={person.name}
              alt={person.name}
              loading="lazy"
              className={classes.cardMedia}
            />
          </CardActionArea>
          <CardContent className={classes.cardContent}>
            <Typography fontWeight="700">{person.name}</Typography>
            <Typography>
              {person.known_for &&
                person.known_for.map((movie) => (
                  <Typography className={classes.detail}>
                    {movie.title}
                  </Typography>
                ))}
            </Typography>
          </CardContent>
        </Box>
      ))}
      <SearchPagination total_pages={people.total_pages} params={params} />
    </>
  ) : (
    <Typography>There are no people.</Typography>
  );
};
export default PopularPeople;

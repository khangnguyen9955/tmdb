import { Card, makeStyles, Typography } from "@material-ui/core";
import { CardActionArea, CardContent, CardMedia } from "@mui/material";
import React from "react";
import SearchPagination from "../SearchPage/SearchPagination";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    maxWidth: "calc(100vw-82px)",
    marginBottom: theme.spacing(3),
  },
  area: {
    minWidth: 95,
    height: 140,
  },
  cardMedia: {
    height: "100%",
    width: 100,
    borderRadius: 0,
  },
  cardContent: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    boxSizing: "border-box",
    padding: "10px 15px",
  },
  overview: {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  title: {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    textDecoration: "none",
    color: "black",
  },
  details: {
    fontSize: "1em",
    color: "rgba(0,0,0,0.6)",
  },
}));

const SearchPeople = ({ people, params }) => {
  const classes = useStyles();
  return people.results.length > 0 ? (
    <>
      {people.results.map((person) => (
        <Card className={classes.card}>
          <CardActionArea
            className={classes.area}
            sx={{ width: 95 }}
            component={Link}
            to={`/person/${person.id}`}
          >
            <CardMedia
              component="img"
              image={person.profile_path}
              title={person.name}
              alt={person.name}
              loading="lazy"
              className={classes.cardMedia}
            />
          </CardActionArea>
          <CardContent
            className={classes.cardContent}
            component={Link}
            to={`/person/${person.id}`}
          >
            <Typography className={classes.title} variant="subtitle1">
              {person.name}
            </Typography>
            <Typography>
              {person.known_for &&
                person.known_for.map((movie) => (
                  <Typography className={classes.details}>
                    {movie.title}
                  </Typography>
                ))}
            </Typography>
          </CardContent>
        </Card>
      ))}
      <SearchPagination total_pages={people.total_pages} params={params} />
    </>
  ) : (
    <Typography>There are no people that matched your query.</Typography>
  );
};

export default SearchPeople;

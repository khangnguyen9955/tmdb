import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../common/Loading";
import Header from "./Header";
import fetchMovie from "../../api/fetchMovie";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Cast from "./Cast";
const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: 64,
  },
}));
const MoviePage = () => {
  const classes = useStyles();
  const [movie, setMovie] = useState({});
  const params = useParams();
  const { id } = params;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setMovie(await fetchMovie(id));
      setLoading(false);
    };
    fetchData();
  }, [id]);
  console.log(movie);
  return loading ? (
    <Loading />
  ) : (
    <div className={classes.main}>
      <Header details={movie} created_by={movie.credits.cast.slice(0, 5)} />
      <Container>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12} md={9}>
            <Cast cast={movie.credits.cast} id={id} />
          </Grid>

          <Grid item xs={12} md={3}>
            Facts
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MoviePage;

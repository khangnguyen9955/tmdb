import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../common/Loading";
import Header from "./Header";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Cast from "./Cast";
import Media from "./Media";
import Recommendations from "./Recommendations";
import Details from "./Details";
import fetchTV from "../../api/fetchTV";
const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: 64,
  },
}));
const TVPage = () => {
  const classes = useStyles();
  const [tv, setTV] = useState({});
  const params = useParams();
  const { id } = params;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setTV(await fetchTV(id));
      setLoading(false);
    };
    fetchData();
  }, [id]);

  return loading ? (
    <Loading />
  ) : (
    <div className={classes.main}>
      <Header details={tv} created_by={tv.created_by} />
      <Container>
        <Grid container spacing={3} justify="center">
          <Grid item="true" xs={12} md={9}>
            <Cast cast={tv.credits.cast} media_type={tv.media_type} id={id} />
            <Media details={tv} />
            <Recommendations
              recommendations={tv.recommendations}
              media_type={tv.media_type}
            />
          </Grid>
          <Grid item="true" xs={12} md={3}>
            <Details details={tv} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TVPage;

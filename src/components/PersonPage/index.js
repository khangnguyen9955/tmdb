import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import fetchPerson from "../../api/fetchPerson";
import Loading from "../common/Loading";
import Biography from "./Biography";
import KnownFor from "./KnownFor";
import MovieCredits from "./MovieCredits.js";
import PersonalInfo from "./PersonalInfo";
import { useParams } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  leftColumn: {
    "& > *": {
      marginBottom: 4,
    },
  },
  rightColumn: {
    "& > *": {
      marginBottom: 8,
    },
  },
  main: {
    marginTop: 128,
  },
}));
const PersonPage = ({ match }) => {
  const classes = useStyles();
  const params = useParams();
  const { id } = params;
  const [person, setPerson] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setPerson(await fetchPerson(id));
      setLoading(false);
    };
    fetchData();
  }, [id]);
  console.log(person);
  return loading ? (
    <Loading />
  ) : (
    <Container className={classes.main}>
      <Grid container spacing={3}>
        <Grid item md={3} sx={12} className={classes.leftColumn}>
          <PersonalInfo person={person} />
        </Grid>
        <Grid item md={9} sx={12} className={classes.rightColumn}>
          <Biography person={person} />
          <KnownFor
            credits={
              person.movie_credits.cast.length
                ? person.movie_credits.cast
                : person.movie_credits.crew
            }
          />
          <MovieCredits
            cast={person.movie_credits.cast}
            crew={person.movie_credits.crew}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PersonPage;

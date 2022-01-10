import { Container, Fade, makeStyles } from "@material-ui/core";

import { useState, useEffect } from "react";
import Welcome from "./Welcome";
import JoinToday from "./JoinToday";
import { fetchPopular } from "../../api/fetchPopular";
import GridListMovie from "./GridListMovie";
import FilterGroup from "./FilterGroup";
import fetchTrending from "../../api/fetchTrending";
const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: 64,
    width: "100%",
    display: "flex",
    alignContent: "flex-start",
    justifyContent: "center",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    maxWidth: "100%",
  },
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: " flex-start",
    alignContent: "flex-start",
    width: "100%",
    flexWrap: "wrap",
    maxWidth: 1300,
    paddingTop: 30,
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const [backdrop, setBackdrop] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const popularData = await fetchPopular("movie");
      const randomBackdrop =
        popularData[Math.floor(Math.random() * popularData.length)]
          .backdrop_path;
      setBackdrop(randomBackdrop);
    };
    fetchData();
  }, []);

  const [type, setType] = useState("tv");
  const [popular, setPopular] = useState([]);
  const [typeChecked, setTypeChecked] = useState(false);
  const timeout = 300;

  useEffect(() => {
    setTypeChecked(false);
    const fetchData = setTimeout(async () => {
      setPopular(await fetchPopular(type));
      setTypeChecked(true);
    }, timeout);
    return () => clearTimeout(fetchData);
  }, [type]);

  const [time, setTime] = useState("day");
  const [trending, setTrending] = useState([]);
  const [timeChecked, setTimeChecked] = useState(false);

  useEffect(() => {
    setTimeChecked(false);
    const fetchData = setTimeout(async () => {
      setTrending(await fetchTrending(time));
      setTimeChecked(true);
    }, timeout);
    return () => clearTimeout(fetchData);
  }, [time]);
  const handleType = (e, target) => {
    if (target !== null) {
      setType(target);
    }
  };

  const handleTime = (e, target) => {
    if (target !== null) {
      setTime(target);
    }
  };
  return (
    <Container className={classes.main}>
      <Welcome backdrop={backdrop} />
      <div className={classes.box}>
        <FilterGroup
          title="What's popular"
          value={type}
          handleChange={handleType}
          value1="tv"
          value2="movie"
          label1="On TV"
          label2="In Theaters"
        />
        <Fade in={typeChecked} timeout={timeout}>
          <div>
            <GridListMovie movies={popular} />
          </div>
        </Fade>
        <FilterGroup
          title="Trending"
          value={time}
          handleChange={handleTime}
          value1="day"
          value2="week"
          label1="Today"
          label2="This Week"
        />
        <Fade in={timeChecked} timeout={timeout}>
          <div>
            <GridListMovie movies={trending} />
          </div>
        </Fade>
      </div>
      <JoinToday />
    </Container>
  );
};
export default HomePage;

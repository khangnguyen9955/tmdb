import { makeStyles } from "@material-ui/core";
import { useState, useEffect } from "react";
import Welcome from "./Welcome";
import { fetchPopular } from "../../api/fetchPopular";
const useStyles = makeStyles(() => ({
  main: {
    marginTop: 64,
    width: "100%",
    display: "flex",
    alignContent: "flex-start",
    justifyContent: "center",
    flexWrap: "wrap",
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
  return (
    <div className={classes.main}>
      <Welcome backdrop={backdrop} />
    </div>
  );
};
export default HomePage;

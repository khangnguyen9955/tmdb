import React from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";
import { Container, Typography } from "@mui/material";
import no_image from "../../assets/no_image2.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    maxWidth: 1400,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 0,
    paddingBottom: 0,
  },
  card: {},
  cardMedia: {},
  image: {
    backgroundImage: `url(${no_image})`,
    width: "100%",
    height: "100%",
    backgroundSize: "30%",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#dbdbdb",
    borderRadius: 0,
    border: "none",
    backgroundPosition: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    display: "flex",
    alignItems: "baseline",
    marginBottom: 5,
    width: "100%",
    justifyContent: "space-between",
  },
  content: {
    display: "flex",
    position: "absolute",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    top: 0,
    left: 0,
    flexWrap: "wrap",
  },
  titleContent: {},
  dateItem: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
  numberItems: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
  box: {
    width: "calc((100vw - 200px) / 2)",
    height: "calc(((100vw - 100px) / 2) / 1.78)",
    maxWidth: "calc(( 1400px - 200px) / 2)",
    maxHeight: "calc(((1400px - 100px) / 2) / 1.78)",
    overflow: "hidden",
    marginTop: 20,
    borderRadius: 4,
    position: "relative",
    top: 0,
    left: 0,
  },
}));

const List = () => {
  const classes = useStyles();
  return (
    <Container
      style={{
        display: "flex",
        width: "100%",
        maxWidth: 1400,
      }}
    >
      <Grid container className={classes.container}>
        <Grid item className={classes.title}>
          <Typography>My Lists</Typography>
          <Box>
            <button>Create List</button>
          </Box>
        </Grid>
        <Grid
          item
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Box className={classes.box}>
            <Box style={{ width: "100%", minWidth: "100%", height: "100%" }}>
              <div className={classes.image}></div>
            </Box>
            <div className={classes.content}>
              <h2 className={classes.titleContent}>Test</h2>
              <div className={classes.numberItems}>Also Test</div>
              <span className={classes.dateItem}> test as well</span>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default List;

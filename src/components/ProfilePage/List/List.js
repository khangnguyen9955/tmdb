import React, { useState } from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";
import { Button, Container, Typography } from "@mui/material";
import no_image from "../../../assets/no_image3.svg";
import { useSelector } from "react-redux";
import ListMovies from "./ListMovies";

const useStyles = makeStyles((theme) => ({
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
  containerTitle: {
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
    padding: "20px 40px",
    backgroundColor: "rgba(3,37,65,0.8)",
  },
  titleContent: {
    color: "#fff",
    fontSize: "2em",
    lineHeight: "1.1em",
    fontWeight: 700,
    textAlign: "center",
    width: "100%",
    overflow: "hidden",
    margin: 0,
    fontStyle: "italic",
    cursor: "pointer",
  },
  dateItem: {
    margin: 0,
    padding: 0,
    fontSize: "1em",
    color: "rgba(255,255,255,0.5)",
  },
  button: {
    fontSize: "1em",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "capitalize",
    display: "inline-flex",
    padding: "4px 8px",
    marginLeft: 20,
    color: "#fff",
    fontWeight: 700,
    backgroundColor: "rgba(128,91,231,1)",
    borderColor: "#805be7",
    borderRadius: 5,
    border: "2px solid #fff",
  },
  numberItems: {
    display: "flex",
    width: "100%",
    fontStyle: "italic",
    textAlign: "center",
    alignItems: "baseline",
    justifyContent: "center",
    fontWeight: 500,
    fontSize: "1.2em",
    color: "#fff",
    marginTop: 10,
  },
  box: {
    width: "calc((100vw - 200px) / 2)",
    height: "calc(((100vw - 100px) / 2) / 1.78)",
    maxWidth: "calc(( 1400px - 70px) / 2)",
    maxHeight: "calc(((1400px - 100px) / 2) / 1.78)",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: 150,
    },
    overflow: "hidden",
    marginTop: 20,
    borderRadius: 4,
    position: "relative",
    top: 0,
    left: 0,
  },
}));

const List = (props) => {
  const classes = useStyles();
  const { lists } = useSelector((state) => state.lists);
  const [openList, setOpenList] = useState(false);
  const [listId, setListId] = useState(null);
  const createListForm = () => {
    props.createListForm();
  };

  const handleOpenList = (id) => {
    setListId(id);
    setOpenList((state) => !state);
  };
  const handleBackToLists = () => {
    setOpenList((state) => !state);
  };
  return (
    <>
      {openList ? (
        <ListMovies listId={listId} handleBackToLists={handleBackToLists} />
      ) : (
        <Container
          style={{
            display: "flex",
            width: "100%",
            maxWidth: 1400,
            padding: 0,
          }}
        >
          <Grid container>
            <Grid item className={classes.containerTitle}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "1.5em",
                  fontFamily: "'Source Sans Pro', Arial, sans-serif",
                }}
              >
                My Lists
              </Typography>
              <Button onClick={createListForm}>
                <Typography sx={{ fontWeight: 600 }} className={classes.button}>
                  Create List
                </Typography>
              </Button>
            </Grid>
            <Grid
              style={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              {lists.length === 0 ? (
                <Typography>
                  You haven't created any lists in your account.
                </Typography>
              ) : (
                lists.map((list) => (
                  <Box className={classes.box} key={list._id}>
                    <Box
                      style={{
                        width: "100%",
                        minWidth: "100%",
                        height: "100%",
                      }}
                    >
                      <div className={classes.image}></div>
                    </Box>

                    <div className={classes.content}>
                      <h2
                        className={classes.titleContent}
                        onClick={() => handleOpenList(list._id)}
                      >
                        {list.listName}
                      </h2>
                      <div className={classes.numberItems}>
                        {list.listMovie.length ? list.listMovie.length : "0"}{" "}
                        items
                      </div>
                      <span className={classes.dateItem}>
                        Created {list.createdAt ? list.createdAt : "just now"}
                      </span>
                    </div>
                  </Box>
                ))
              )}
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default List;

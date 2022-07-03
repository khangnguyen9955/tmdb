import React, { useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import FilterGroup from "../FilterGroup";
import Filter from "../Filter";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";

const ListMovies = ({ listId, handleBackToLists }) => {
  const { lists } = useSelector((state) => state.lists);
  const findList = lists.filter((list) => list._id === listId);
  const list = findList[0];
  const totalTv = list.listMovie.filter((movie) => movie.media_type === "tv");
  const totalMovie = list.listMovie.filter(
    (movie) => movie.media_type === "movie"
  );
  const [type, setType] = useState("movie");
  const [sortBy, setSortBy] = useState("date_added");
  const handleChangeType = (event, newValue) => {
    setType(newValue);
  };
  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };
  const backToLists = () => {
    handleBackToLists();
  };
  return (
    <>
      <Grid container>
        <Box
          style={{
            marginBottom: 10,
            display: "flex",
            alignContent: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              cursor: "pointer",
            }}
            onClick={backToLists}
          >
            <ArrowBackIcon
              style={{
                marginRight: 5,
                fontSize: 25,
                color: "#805be7",
              }}
            />
            <Typography
              style={{
                color: "#805be7",
                fontSize: "1.1em",
              }}
            >
              Back to lists
            </Typography>
          </div>
          <div style={{ display: "flex", cursor: "pointer" }}>
            <DeleteIcon
              style={{
                marginRight: 5,
                fontSize: 25,
                color: "#de736b",
              }}
            />
            <Typography
              style={{
                color: "#de736b",
                fontSize: "1.1em",
              }}
            >
              Delete this list
            </Typography>
          </div>
        </Box>
        <Grid container justifyContent={"space-between"}>
          <FilterGroup
            totalMovie={totalMovie.length}
            totalTV={totalTv.length}
            type={type}
            handleChangeType={handleChangeType}
            groupTitle={list.listName}
          />
          <Filter sortBy={sortBy} handleSortBy={handleSortBy} />
        </Grid>
      </Grid>
      {type === "movie" &&
        totalMovie
          .sort((a, b) =>
            sortBy === "date_added"
              ? new Date(b.createdAt) - new Date(a.createdAt)
              : sortBy === "release_date"
              ? new Date(b.release_date) - new Date(a.release_date)
              : b.popularity - a.popularity
          )
          .map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      {type === "tv" &&
        totalTv
          .sort((a, b) =>
            sortBy === "date_added"
              ? new Date(b.createdAt) - new Date(a.createdAt)
              : sortBy === "release_date"
              ? new Date(b.release_date) - new Date(a.release_date)
              : b.popularity - a.popularity
          )
          .map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      {list.listMovie.length === 0 && (
        <Typography>You haven't added any movies in your list.</Typography>
      )}
    </>
  );
};

export default ListMovies;

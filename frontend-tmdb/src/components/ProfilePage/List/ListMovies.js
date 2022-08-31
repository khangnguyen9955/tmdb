import React, { useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import FilterGroup from "../FilterGroup";
import Filter from "../Filter";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../MovieCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeList, removeMovieFromList } from "../../../redux/listsActions";
import { toast, ToastContainer, Zoom } from "react-toastify";

const ListMovies = ({ listId, handleBackToLists }) => {
  const { lists } = useSelector((state) => state.lists);
  const findList = lists.filter((list) => list._id === listId);
  const list = findList.length > 0 ? findList[0] : null;
  const totalTv =
    list !== null
      ? list.listMovie.filter((movie) => movie.media_type === "tv")
      : 0;
  const totalMovie =
    list !== null
      ? list.listMovie.filter((movie) => movie.media_type === "movie")
      : 0;
  const [type, setType] = useState("movie");
  const [sortBy, setSortBy] = useState("date_added");
  const dispatch = useDispatch();
  const successToast = (message) => {
    toast.success(message);
  };
  const handleChangeType = (event, newValue) => {
    setType(newValue);
  };
  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };
  const backToLists = () => {
    handleBackToLists();
  };
  const handleRemoveFromList = (movieId) => {
    dispatch(removeMovieFromList(listId, movieId));
    successToast("Remove the movie from your list successfully!");
  };

  const handleDeleteList = () => {
    if (window.confirm("Are you sure want to delete this list?")) {
      dispatch(removeList(listId));
      backToLists();
    }
  };
  return (
    <>
      <Grid container>
        <ToastContainer
          draggable={false}
          transition={Zoom}
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
        />
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
          <div
            style={{ display: "flex", cursor: "pointer" }}
            onClick={handleDeleteList}
          >
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
          .map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              handleRemove={handleRemoveFromList}
            />
          ))}
      {type === "tv" &&
        totalTv
          .sort((a, b) =>
            sortBy === "date_added"
              ? new Date(b.createdAt) - new Date(a.createdAt)
              : sortBy === "release_date"
              ? new Date(b.release_date) - new Date(a.release_date)
              : b.popularity - a.popularity
          )
          .map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              handleRemove={handleRemoveFromList}
            />
          ))}
      {list.listMovie.length === 0 && (
        <Typography>You haven't added any movies in your list.</Typography>
      )}
    </>
  );
};

export default ListMovies;

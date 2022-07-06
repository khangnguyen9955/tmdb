import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import FilterGroup from "./FilterGroup";
import Filter from "./Filter";
import MovieCard from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWatchlist } from "../../redux/watchlistActions";

const Watchlist = () => {
  const { watchlist } = useSelector((state) => state.watchlist);
  const [type, setType] = useState("movie");
  const totalTv = watchlist.filter((movie) => movie.media_type === "tv");
  const totalMovie = watchlist.filter((movie) => movie.media_type === "movie");
  const [sortBy, setSortBy] = useState("date_added");
  const dispatch = useDispatch();
  const handleChangeType = (event, newValue) => {
    setType(newValue);
  };
  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };
  const handleRemoveFromWatchlist = (movieId) => {
    dispatch(removeFromWatchlist(movieId));
  };
  return (
    <>
      <Grid container justifyContent="space-between">
        <FilterGroup
          totalMovie={totalMovie.length}
          totalTV={totalTv.length}
          type={type}
          handleChangeType={handleChangeType}
          groupTitle="My Watchlist"
        />
        <Filter sortBy={sortBy} handleSortBy={handleSortBy} />
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
              handleRemove={handleRemoveFromWatchlist}
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
              handleRemove={handleRemoveFromWatchlist}
            />
          ))}
      {watchlist.length === 0 && (
        <Typography>You haven't added any movies in your watchlist.</Typography>
      )}
    </>
  );
};

export default Watchlist;

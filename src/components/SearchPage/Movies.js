import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import MovieCard from "../common/MovieCard";
import SearchPagination from "./SearchPagination";

const Movies = ({ movies, params }) => {
  return movies.results.length > 0 ? (
    <>
      {movies.results.map((movie) => (
        <MovieCard key={movie.id} details={movie} media_type={params.type} />
      ))}
      <SearchPagination total_pages={movies.total_pages} params={params} />
    </>
  ) : (
    <Typography>There are no movies. </Typography>
  );
};

export default Movies;

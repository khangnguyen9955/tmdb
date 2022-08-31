import { Typography } from "@mui/material";
import MovieCard from "../common/MovieCard";
import SearchPagination from "./SearchPagination";
const PopularTVShows = ({ tvShows, params }) => {
  return tvShows.results.length > 0 ? (
    <>
      {tvShows.results.map((tvShow) => (
        <MovieCard key={tvShow.id} details={tvShow} media_type={params.type} />
      ))}
      <SearchPagination total_pages={500} params={params} />
    </>
  ) : (
    <Typography>There are no TV Shows. </Typography>
  );
};

export default PopularTVShows;

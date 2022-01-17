import {
  CardMedia,
  Container,
  Fab,
  Grid,
  makeStyles,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { DateTime } from "luxon";
import React from "react";
import { Link } from "react-router-dom";
import ListIcon from "@mui/icons-material/List";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import StarIcon from "@mui/icons-material/Star";
const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    backgroundImage: "linear gradient",
  },
  container: {},
}));

function Header({ details, created_by }) {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Container className={classes.container}>
        <Grid container spacing={3} alignItems="center" justify="center">
          <Grid item md={3} xs={6}>
            <CardMedia
              component="img"
              alt={details.title}
              image={details.poster_path}
              title={details.title}
              loading="lazy"
            />
          </Grid>
          <Grid
            item
            container
            spacing={2}
            md={9}
            xs={12}
            direction="column"
            pl={4}
          >
            <Grid item>
              <Typography>
                {details.title}{" "}
                {details.release_date && (
                  <Typography>
                    {`(${new Date(details.release_date).getFullYear()})`}
                  </Typography>
                )}
              </Typography>
              <Typography>
                {details.release_date && (
                  <>
                    {details.release_date.certification && (
                      <span className={classes.certification}>
                        {details.release_date.certification}
                      </span>
                    )}{" "}
                    {details.release_date && (
                      <span>
                        {DateTime.fromISO(
                          details.release_dates.release_date
                        ).toFormat("MM/dd/yyyy")}
                      </span>
                    )}{" "}
                    {details.release_dates.iso_3166_1 && (
                      <span>
                        {`(${details.release_dates.iso_3166_1})`} {" \u2022 "}
                      </span>
                    )}
                  </>
                )}
                {/* {" \u2022 "} === bullet point  */}
                {details.genres &&
                  details.genres.map((genre, index) => (
                    <span key={genre.id}>
                      <Link to="#"> {genre.name}</Link>
                      {index < details.genres.length - 1 && ", "}
                    </span>
                  ))}
                {details.runtime > 0 && (
                  <span>
                    {" \u2022 "}
                    {details.runtime >= 60
                      ? Math.floor(details.runtime / 60) +
                        "h " +
                        (details.runtime % 60) +
                        "m"
                      : details.runtime + "m"}
                  </span>
                )}
              </Typography>
            </Grid>
            <Grid>Donut</Grid>
            <Grid item>
              <Typography>
                <b>
                  User
                  <br />
                  Score
                </b>
              </Typography>
            </Grid>
            {(details.media_type === "movie" ||
              details.media_type === "tv") && (
              <Grid item>
                <Tooltip title="Login to edit and create custom lists">
                  <Fab size="medium" color="primary">
                    <ListIcon />
                  </Fab>
                </Tooltip>

                <Tooltip title="Login to add this movie to your favorite list">
                  <Fab size="medium" color="primary">
                    <FavoriteIcon />
                  </Fab>
                </Tooltip>
                <Tooltip title="Login to add this movie to your watchlist">
                  <Fab size="medium" color="primary">
                    <BookmarkIcon />
                  </Fab>
                </Tooltip>
                <Tooltip title="Login to rate this movie">
                  <Fab size="medium" color="primary">
                    <StarIcon />
                  </Fab>
                </Tooltip>
              </Grid>
            )}

            <Grid>
              <Typography variant="h6">Overview</Typography>
              <Typography variant="body2">{details.overview}</Typography>
            </Grid>
            {created_by &&
              created_by.map((creator) => (
                <Grid>
                  <Typography>{creator.name}</Typography>
                  <Typography>
                    {creator.department ? creator.department : "Creator"}
                  </Typography>
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Header;

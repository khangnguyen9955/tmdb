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
import CustomDonut from "../common/customDonut";
const useStyles = makeStyles((theme) => ({
  header: (props) => ({
    backgroundPosition: "right top",
    backgroundSize: "cover",
    backgroundImage: `linear-gradient(to right,
     rgba(0,0,0,1), rgba(20,20,20,0.85)),
    url(${props.backdrop_path})`,
    width: "100%",
    position: "relative",
    zIndex: 1,
    minHeight: 570,
  }),
  image: {
    width: 300,
    minWidth: 300,
    height: 450,
    borderRadius: 8,
  },
  imageArea: {
    marginRight: 15,
  },
  container: {
    color: "white",
    maxWidth: 1350,
    width: "100%",
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 40,
    paddingRight: 40,
    zIndex: 0,
  },
  actions: {
    marginBottom: 20,
    width: "100%",
    height: 68,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  wrapper: {
    position: "relative",
    marginRight: 20,
  },
  button: {
    marginRight: 20,
  },
  certification: {
    padding: "2px 4px",
    border: "1px solid white",
    opacity: 0.8,
  },
  creator: {
    fontSize: "0.9em",
  },
  creatorName: {
    fontSize: "1em",
    fontWeight: "bold",
  },
  creatorArea: {
    marginTop: 5,
  },
  year: {
    fontWeight: 400,
    opacity: 0.8,
    fontSize: "2.2rem",
    marginLeft: 5,
  },
  type: {
    fontSize: "16px",
    opacity: 0.8,
  },
  title: {
    fontWeight: 700,
    fontSize: "2.2rem",
  },
  titleArea: {
    display: "inline-flex",
    alignItems: "center",
  },
  donut: {
    paddingRight: "0 !important",
  },
}));

const Header = ({ details, created_by }) => {
  const classes = useStyles({ backdrop_path: details.backdrop_path });
  return (
    <div className={classes.header}>
      <Container className={classes.container}>
        <Grid container spacing={3} alignItems="center" justify="center">
          <Grid item md={3} xs={6} className={classes.imageArea}>
            <CardMedia
              component="img"
              alt={details.title}
              image={details.poster_path}
              title={details.title}
              loading="lazy"
              className={classes.image}
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
              <Grid className={classes.titleArea}>
                <Typography className={classes.title}>
                  {details.title}{" "}
                </Typography>
                {details.release_date && (
                  <Typography className={classes.year}>
                    {`(${new Date(details.release_date).getFullYear()})`}
                  </Typography>
                )}
              </Grid>
              <Typography className={classes.type}>
                {details.release_dates && (
                  <>
                    {details.release_dates.certification && (
                      <span className={classes.certification}>
                        {details.release_dates.certification}
                      </span>
                    )}{" "}
                    {details.release_dates.release_date && (
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
                        "h" +
                        (details.runtime % 60) +
                        "m"
                      : details.runtime + "m"}
                  </span>
                )}
              </Typography>
            </Grid>
            <Grid
              item
              container
              spacing={3}
              alignItems="center"
              className={classes.actions}
            >
              <Grid item className={classes.donut}>
                <CustomDonut vote_average={details.vote_average} size={60} />
              </Grid>
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
                <Grid item className={classes.wrapper}>
                  <Tooltip title="Login to edit and create custom lists">
                    <Fab
                      size="medium"
                      color="primary"
                      className={classes.button}
                    >
                      <ListIcon />
                    </Fab>
                  </Tooltip>

                  <Tooltip title="Login to add this movie to your favorite list">
                    <Fab
                      size="medium"
                      color="primary"
                      className={classes.button}
                    >
                      <FavoriteIcon />
                    </Fab>
                  </Tooltip>
                  <Tooltip title="Login to add this movie to your watchlist">
                    <Fab
                      size="medium"
                      color="primary"
                      className={classes.button}
                    >
                      <BookmarkIcon />
                    </Fab>
                  </Tooltip>
                  <Tooltip title="Login to rate this movie">
                    <Fab
                      size="medium"
                      color="primary"
                      className={classes.button}
                    >
                      <StarIcon />
                    </Fab>
                  </Tooltip>
                </Grid>
              )}
            </Grid>
            <Grid>
              <Typography variant="h6">Overview</Typography>
              <Typography variant="body2">{details.overview}</Typography>
            </Grid>
            <Grid item container spacing={2} className={classes.creatorArea}>
              {created_by &&
                created_by.map((creator) => (
                  <Grid item xs={6} md={4} key={creator.id}>
                    <Typography
                      className={classes.creatorName}
                      component={Link}
                      to={`/person/${creator.id}`}
                    >
                      {creator.name}
                    </Typography>
                    <Typography className={classes.creator}>
                      {creator.department ? creator.department : "Creator"}
                    </Typography>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Header;

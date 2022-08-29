import {
  Box,
  CardMedia,
  Container,
  Fab,
  Grid,
  makeStyles,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { DateTime } from "luxon";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ListIcon from "@mui/icons-material/List";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import StarIcon from "@mui/icons-material/Star";
import CustomDonut from "../common/customDonut";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWatchlist,
  removeFromWatchlist,
} from "../../redux/watchlistActions";
import { Popover } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { addMovieToList } from "../../redux/listsActions";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer, Zoom } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  header: (props) => ({
    backgroundPosition: "right top",
    backgroundSize: "cover",
    backgroundImage: `linear-gradient(to right,
     rgba(0,0,0,1), rgba(20,20,20,0.85)),
    url(${props.backdrop_path})`,
    width: "100%",
    zIndex: 1,
    minHeight: 570,
  }),

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
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  wrapper: {
    display: "flex",
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
    fontSize: "2rem",
  },
  titleArea: {
    display: "inline-flex",
    alignItems: "baseline",
  },
  donut: {
    paddingRight: "0 !important",
  },
  titleItemList: {
    padding: 3,
    fontWeight: 600,
    fontSize: "0.9em",
    color: "black",
    whiteSpace: "nowrap",
    overflow: "hidden",
    marginBottom: 8,
    cursor: "pointer",
    "&:hover": {
      transition: "0.3s",
      backgroundColor: "rgba(1,180,228,1)",
      color: "white",
    },
  },
  itemList: {
    fontSize: "0.9em",
    color: "black",
    padding: 3,
    whiteSpace: "nowrap",
    marginBottom: 5,
    cursor: "pointer",
    "&:hover": {
      transition: "0.2s",
      backgroundColor: "rgba(200,200,200,0.3)",
    },
  },
}));

const Header = ({details, created_by}) => {
  const classes = useStyles({backdrop_path: details.backdrop_path});
  const {isAuth} = useSelector((state) => state.auth);
  const {watchlist, isLoading, isAdding, isRemoving} = useSelector(
      (state) => state.watchlist
  );
  const {lists} = useSelector((state) => state.lists);
  const dispatch = useDispatch();
  const successToast = (message) => {
    toast.success(message);
  };
  const errorToast = (message) => {
    toast.error(message);
  };
  const handleAddMovie = () => {
    const movie = {
      id: details.id,
      title: details.title,
      media_type: details.media_type,
      release_date: details.release_date,
      poster_path: details.poster_path,
      vote_average: details.vote_average,
      popularity: details.popularity,
      overview: details.overview,
    };
    dispatch(addToWatchlist(movie));
  };
  const [anchor, setAnchor] = useState(null);
  const [subAnchor, setSubAnchor] = useState(null);
  const handleClick = (e) => {
    setAnchor(e.currentTarget);
  };
  const handleClose = () => {
    setAnchor(null);
  };
  const open = Boolean(anchor);

  const handleSubClick = (e) => {
    setSubAnchor(e.currentTarget);
  };
  const handleSubClose = () => {
    setSubAnchor(null);
  };
  const subOpen = Boolean(subAnchor);

  const isAdded = watchlist.some((movie) => movie.id === details.id);
  const navigate = useNavigate();
  const handleCreateNewlist = () => {
    navigate("/profile/");
  };
  const handleAddMovieToList = (id) => {
    const listId = {id};
    const movie = {
      id: details.id,
      title: details.title,
      media_type: details.media_type,
      release_date: details.release_date,
      poster_path: details.poster_path,
      vote_average: details.vote_average,
      popularity: details.popularity,
      overview: details.overview,
    };
    dispatch(addMovieToList(listId, movie));
  };
  return (
      <div className={classes.header}>
        <ToastContainer
            draggable={false}
            transition={Zoom}
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
        />
        <Container className={classes.container}>
          <Grid container spacing={3} alignItems="center" justifyContent="center">
            <Grid item md={3} xs={10}>
              <CardMedia
                  component="img"
                  alt={details.title}
                  image={details.poster_path}
                  title={details.title}
                  loading="lazy"
                  style={{borderRadius: 8}}
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
                {/*<Grid item className={classes.titleArea}>*/}
                {/*    <Typography className={classes.title}>*/}
                {/*        {details.title}{" "}*/}
                {/*    </Typography>*/}
                {/*    {details.release_date && (*/}
                {/*        <Typography className={classes.year}>*/}
                {/*            {`(${new Date(details.release_date).getFullYear()})`}*/}
                {/*        </Typography>*/}
                {/*    )}*/}
                {/*</Grid>*/}
                <Typography className={classes.title}>
                  {details.title}{" "}
                  {details.release_date && (
                      <Typography className={classes.year} component="span">
                        {`(${new Date(details.release_date).getFullYear()})`}
                      </Typography>
                  )}
                </Typography>
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
                  <CustomDonut vote_average={details.vote_average} size={60}/>
                </Grid>
                <Grid item>
                  <Typography>
                    <b>
                      User
                      <br/>
                      Score
                    </b>
                  </Typography>
                </Grid>
                {(details.media_type === "movie" ||
                    details.media_type === "tv") && (
                    <Grid item className={classes.wrapper}>
                      <Tooltip
                          title={
                            isAuth
                                ? "Add to your custom list"
                                : "Login to add this movie to your custom list"
                          }
                      >
                        <Fab
                            size="medium"
                            color="primary"
                            className={classes.button}
                            onClick={
                              !isAuth
                                  ? () =>
                                      alert(
                                          "You need to login to add this movie to your list"
                                      )
                                  : handleClick
                            }
                        >
                          <ListIcon/>
                        </Fab>
                      </Tooltip>
                      <Popover
                          open={open}
                          anchorEl={anchor}
                          onClose={handleClose}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "center",
                          }}
                          style={{
                            marginTop: 15,
                          }}
                      >
                        <Box
                            style={{
                              width: 300,
                              backgroundColor: "rgba(3,37,65,1)",
                              opacity: 1,
                              borderRadius: 4,
                              borderColor: "#000",
                              borderWidth: 0,
                              borderStyle: "solid",
                            }}
                        >
                          <div
                              style={{
                                display: "flex",
                                width: "100%",
                                color: "white",
                                alignItems: "center",
                                padding: "10px 10px",
                                cursor: "pointer",
                              }}
                              onClick={handleCreateNewlist}
                          >
                            <AddIcon style={{marginRight: 5, fontSize: 25}}/>
                            <Typography
                                style={{fontStyle: "1.3em", fontWeight: 600}}
                            >
                              Create New List
                            </Typography>
                          </div>

                          <div
                              style={{
                                display: "flex",
                                width: "100%",
                                marginTop: 15,
                                color: "white",
                                alignItems: "center",
                                paddingBottom: 10,
                                cursor: "pointer",
                              }}
                              onClick={handleSubClick}
                          >
                            <Typography
                                style={{
                                  marginLeft: 10,
                                  whiteSpace: "nowrap",
                                  opacity: 0.8,
                                }}
                            >
                              Add {details.title} to one of your lists...
                            </Typography>
                            <ArrowDropDownIcon/>
                          </div>
                        </Box>
                      </Popover>
                      <Popover
                          open={subOpen}
                          anchorEl={subAnchor}
                          onClose={handleSubClose}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "center",
                          }}
                      >
                        <Box style={{width: 280, padding: "15px 15px"}}>
                          <Typography
                              className={classes.titleItemList}
                              onClick={handleSubClose}
                          >
                            Add {details.title} to one of your lists...
                          </Typography>
                          <div>
                            {lists.map((list) => (
                                <Typography
                                    key={list._id}
                                    className={classes.itemList}
                                    onClick={() => {
                                      handleAddMovieToList(list._id);
                                      successToast(
                                          `Added to your ${list.listName} list`
                                      );
                                      handleSubClose();
                                      handleClose();
                                    }}
                                >
                                  {list.listName} ({list.listMovie.length})
                                </Typography>
                            ))}
                          </div>
                        </Box>
                      </Popover>
                      <Tooltip
                          title={
                            isAuth
                                ? "Add to your favorite list"
                                : "Login to add this movie to your favorite list"
                          }
                      >
                        <Fab
                            size="medium"
                            color="primary"
                            className={classes.button}
                        >
                          <FavoriteIcon/>
                        </Fab>
                      </Tooltip>
                      <Tooltip
                          title={
                            isAuth
                                ? isAdded
                                    ? "Remove from your watchlist"
                                    : "Add to your watchlist"
                                : "Login to add this movie to your watchlist"
                          }
                      >
                        <Fab
                            size="medium"
                            color="primary"
                            className={classes.button}
                            onClick={
                              !isAuth
                                  ? () =>
                                      alert(
                                          "You need to login to add this movie to your watchlist"
                                      )
                                  : !isAdded
                                      ? () => {
                                        handleAddMovie();
                                        successToast("Added to your watchlist");
                                      }
                                      : () => {
                                        dispatch(removeFromWatchlist(details.id));
                                        errorToast("Removed from your watchlist");
                                      }
                            }
                        >
                          <BookmarkIcon/>
                        </Fab>
                      </Tooltip>
                      <Tooltip
                          title={
                            isAuth ? "Rate this movie" : "Login to rate this movie "
                          }
                      >
                        <Fab
                            size="medium"
                            color="primary"
                            className={classes.button}
                        >
                          <StarIcon/>
                        </Fab>
                      </Tooltip>
                    </Grid>
                )}
              </Grid>
              <Grid item>
                <Typography variant="h6">Overview</Typography>
                <Typography variant="body2">
                  {details.overview
                      ? details.overview
                      : "We don't have an overview translated in English. Help us expand our database by adding one.\n"
                  }
                </Typography>
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

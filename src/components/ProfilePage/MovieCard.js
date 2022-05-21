import React from 'react';
import {Box, IconButton, makeStyles, Typography} from "@material-ui/core";
import {Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import {Link} from "react-router-dom";
import {DateTime} from "luxon";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => (
    {
        card: {
            display: "flex",
            width: "100%",
            height: 250,
            marginBottom: 20,
            [theme.breakpoints.down("sm")]: {
                height: 150,
            },
        },
        cardMedia: {
            height: "100%",
            borderRadius: 0,
            width: 150,
            maxWidth: 180,
            [theme.breakpoints.down("sm")]: {
                width: 100,
            },
        },
        cardContent: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            [theme.breakpoints.down("sm")]: {
                justifyContent: "space-between",
                paddingTop: theme.spacing(1),
                "&:last-child": {
                    paddingBottom: theme.spacing(1),
                },
            },
        },
        removeButton: {
            border: "black 1px solid",
            marginRight: theme.spacing(1),
        },
        doughnut: {
            [theme.breakpoints.down("sm")]: {
                display: "none",
            },
        },
        progress: {
            color: "#90caf9",
            position: "absolute",
            top: -4,
            left: -4,
            zIndex: 1,
        },

        overview: {
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
            textOverflow: "ellipsis",
            [theme.breakpoints.down("sm")]: {
                WebkitLineClamp: 2,
            },
        },
        movie: {
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
        },
        title: {},
    }
));


const MovieCard = ({movie}) => {
    const classes = useStyles();
    return (
        <Card className={classes.card} sx={{borderRadius: "8px"}}>
            <CardActionArea component={Link} to={`/${movie.media_type}/${movie.id}`} className={classes.cardMedia}>
                <CardMedia
                    component="img"
                    image={movie.poster_path}
                    alt={movie.title}
                    title={movie.title}
                    loading="lazy"
                    className={classes.cardMedia}
                />
            </CardActionArea>
            <CardContent className={classes.cardContent}>
                <div>
                    {/*<Box position="absolute" className={classes.doughnut}>*/}
                    {/*    <CustomDonut vote_average={movie.vote_average} size={30}/>*/}
                    {/*</Box>*/}
                    <Typography
                        variant="subtitle1"
                        component={Link}
                        to={`/${movie.media_type}/${movie.id}`}
                        className={classes.title}
                        sx={{fontWeight: "700", lineHeight: "1.2"}}
                    >
                        {movie.title}
                    </Typography>
                    <Typography className={classes.movie}>
                        {movie.release_date &&
                            DateTime.fromISO(movie.release_date).toFormat("MMM dd, yyyy")}
                    </Typography>
                </div>
                <div className={classes.overview}>
                    <Typography>{movie.overview}</Typography>
                </div>
                <Box position="relative" display="flex" alignItems="center">
                    <IconButton
                        size="small"
                        // onClick={() => dispatch(removeMovie(movie.id))}
                        className={classes.removeButton}
                    >
                        <CloseIcon/>
                    </IconButton>
                    {/*{isRemoving === movie.id && (*/}
                    {/*	<CircularProgress size={40} className={classes.progress}/>*/}
                    {/*)}*/}
                    <Typography>Remove</Typography>
                </Box>


            </CardContent>


        </Card>

    );
};

export default MovieCard;

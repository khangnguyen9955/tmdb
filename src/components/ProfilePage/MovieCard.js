import React from 'react';
import {Box, IconButton, makeStyles, Typography} from "@material-ui/core";
import {Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import {Link} from "react-router-dom";
import CustomDonut from "../common/customDonut";
import {DateTime} from "luxon";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => (
	{
		card: {},
		cardMedia: {},
		cardContent: {},
		removeButton: {},
		progress: {},
		overview: {},
		movie: {},
		title: {},
	}
));


const MovieCard = ({movie}) => {
	const classes = useStyles();
	return (
		<Card className={classes.card} sx={{borderRadius: "8px"}}>
			<CardActionArea component={Link} to={`/${movie.media_type}/${movie.id}`}>
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
					<Box position="absolute" top={-18} padding={0}>
						<CustomDonut vote_average={movie.vote_average} size={30}/>
					</Box>
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

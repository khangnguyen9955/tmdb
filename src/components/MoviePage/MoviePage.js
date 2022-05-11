import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Loading from "../common/Loading";
import Header from "./Header";
import fetchMovie from "../../api/fetchMovie";
import {Container, Grid, makeStyles} from "@material-ui/core";
import Cast from "./Cast";
import Media from "./Media";
import Recommendations from "./Recommendations";
import Details from "./Details";

const useStyles = makeStyles((theme) => (
	{}
));
const MoviePage = () => {
	const classes = useStyles();
	const [movie, setMovie] = useState({});
	const params = useParams();
	const {id} = params;
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			setMovie(await fetchMovie(id));
			setLoading(false);
		};
		fetchData();
	}, [id]);
	return loading ? (
		<Loading/>
	) : (
		       <div>
			       <Header details={movie} created_by={movie.credits.cast.slice(0, 5)}/>
			       <Container>
				       <Grid container spacing={3} justify="center">
					       <Grid item="true" xs={12} md={9}>
						       <Cast
							       cast={movie.credits.cast}
							       media_type={movie.media_type}
							       id={id}
						       />
						       <Media details={movie}/>
						       <Recommendations
							       recommendations={movie.recommendations}
							       media_type={movie.media_type}
						       />
					       </Grid>
					       <Grid item="true" xs={12} md={3}>
						       <Details details={movie}/>
					       </Grid>
				       </Grid>
			       </Container>
		       </div>
	       );
};

export default MoviePage;

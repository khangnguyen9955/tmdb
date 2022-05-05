import React from 'react';
import {Box, Card, Grid, Typography} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => (
	{
		ul: {
			listStyleType: "none",
			margin: 0,
			padding: 8,
			"& > li": {
				display: "flex",
				margin: 8,
				"& > svg": {
					marginRight: 8,
				},
			},
		},
	}
));
const AdditionalInfor = () => {
	const classes = useStyles();
	return (
		<Grid item md={3}>
			<Card style={{borderRadius: 12, marginBottom: 30, marginTop: 40}}>
				<Box p={3} py={2} style={{backgroundColor: "rgba(1,180,228,1)"}} color="white">
					<Typography>Benefits of being a member</Typography>
				</Box>
				<ul className={classes.ul} style={{alignItems: "center"}}>
					<li>
						<CheckIcon/>
						Find something to watch on your subscribed streaming services
					</li>
					<li>
						<CheckIcon/>
						Log the movies and TV shows you have watched
					</li>
					<li>
						<CheckIcon/>
						Keep track of your favourite movies and TV shows and get recommendations from them
					</li>
					<li>
						<CheckIcon/>
						Build and maintain a personal watchlist
					</li>
					<li>
						<CheckIcon/>
						Build custom mixed lists (movies and TV)
					</li>
					<li>
						<CheckIcon/>
						Take part in movie and TV discussions
					</li>
					<li>
						<CheckIcon/>
						Contribute to, and improve the information in our database
					</li>
				</ul>
			</Card>
		</Grid>
	);
};

export default AdditionalInfor;

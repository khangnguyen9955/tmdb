import React from 'react';
import {FormControl, Grid, makeStyles, MenuItem, Select, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => (
	{
		filter: {},
		formControl: {},
	}
));


const Filter = () => {
	const classes = useStyles();
	return (
		<Grid md="auto" xs={12} className={classes.filter}>
			<Typography>Filter By: </Typography>
			<FormControl className={classes.formControl}>
				<Select>
					<MenuItem>
						Popularity
					</MenuItem>
					<MenuItem>
						Date Added
					</MenuItem>
					<MenuItem>
						Release Date
					</MenuItem>
				</Select>

			</FormControl>


		</Grid>
	);
};

export default Filter;

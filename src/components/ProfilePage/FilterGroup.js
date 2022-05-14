import React from 'react';
import {Grid, Tab, Tabs, Typography} from "@material-ui/core";

const FilterGroup = ({totalMovie, totalTV, type, handleChangeType,}) => {
	return (
		<Grid>
			<Typography>My Watchlist</Typography>
			<Tabs value={type}
			      onChange={handleChangeType}

			>
				<Tab label={"Movie" + totalMovie} value="movie"/>

				<Tab label={"TV" + totalTV} value="tv"/>


			</Tabs>

		</Grid>
	);
};

export default FilterGroup;

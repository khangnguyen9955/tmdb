import React from 'react';
import {Grid, makeStyles, Tab, Tabs, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    tabs: {},

}));

const FilterGroup = ({totalMovie, totalTV, type, handleChangeType}) => {
    const classes = useStyles();
    return (
        <Grid>
            <Typography>My Watchlist</Typography>
            <Tabs value={type}
                  onChange={handleChangeType}
                  indicatorColor="primary"
                  textColor="primary"
                  className={classes.tabs}
            >
                <Tab label={"Movie: " + totalMovie} value="movie"/>

                <Tab label={"TV: " + totalTV} value="tv"/>


            </Tabs>

        </Grid>
    );
};

export default FilterGroup;

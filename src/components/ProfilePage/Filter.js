import React from 'react';
import {FormControl, Grid, makeStyles, MenuItem, Select, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => (
    {
        filter: {},
        formControl: {},
    }
));


const Filter = ({sortBy, handleSortBy}) => {
    const classes = useStyles();
    return (
        <Grid md="auto" xs={12} className={classes.filter}>
            <Typography>Filter By: </Typography>
            <FormControl className={classes.formControl}>
                <Select value={sortBy} onChange={handleSortBy}>
                    <MenuItem value="popularity">
                        Popularity
                    </MenuItem>
                    <MenuItem value="date_added">
                        Date Added
                    </MenuItem>
                    <MenuItem value="release_date">
                        Release Date
                    </MenuItem>
                </Select>

            </FormControl>


        </Grid>
    );
};

export default Filter;

import React from 'react';
import {FormControl, Grid, makeStyles, MenuItem, Select, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => (
    {
        grid: {
            display: "flex",
            alignItems: "center",
        },
        formControl: {marginLeft: 15},
        title: {
            color: "#805be7"
        }
    }
));


const Filter = ({sortBy, handleSortBy}) => {
    const classes = useStyles();
    return (
        <Grid item md="auto" xs={12} className={classes.grid}>
            <Typography>Filter By: </Typography>
            <FormControl className={classes.formControl}>
                <Select value={sortBy} onChange={handleSortBy} className={classes.title}>
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

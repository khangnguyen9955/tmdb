import React, {useState} from 'react';
import {Box, FormControl, Grid, makeStyles, MenuItem, Select, Tab, Tabs, Typography} from "@material-ui/core";
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const useStyles = makeStyles((theme) => ({
    tabs: {
        alignItems: "center",

        '& .MuiTabs-indicator': {
            backgroundColor: '#805be7',
            marginBottom: 10,

        },
        '& button': {
            minWidth: 50,
            minHeight: 30,
            paddingLeft: 0,
            paddingRight: 0,

        }

    },
    gridFilter: {
        display: "flex",
        alignItems: "center",
    },
    formControl: {marginLeft: 15},
    title: {
        color: "#805be7"
    },
    grid: {
        display: "flex",
        alignItems: "baseline"
    },
    ratingTitle: {
        fontWeight: 700,
        fontSize: "1.5em",
        fontFamily: "'Source Sans Pro', Arial, sans-serif"
    },
    type: {
        color: "#000",
        fontSize: "1em",
        fontWeight: "normal",
        marginLeft: 20,
        textTransform: "initial",
        marginBottom: 10,
    },
    gridContainer: {
        marginTop: 20,
        justifyContent: "space-between",
    }
}));

const Rating = () => {
    const [ratingType, setRatingType] = useState("movie");
    const handleChangeRatingType = (event, newValue) => {
        setRatingType(newValue);
    }
    const [sortBy, setSortBy] = useState("date_added");
    const handleSortBy = (e) => {
        setSortBy(e.target.value);
    }
    const classes = useStyles();
    return (
        <>
            <Grid container justifyContent="space-between" className={classes.gridContainer}>
                <Grid item xs={12} md="auto" className={classes.grid}>
                    <Typography className={classes.ratingTitle}>My Ratings </Typography>
                    <Tabs value={ratingType}
                          indicatorColor="primary"
                          textColor="primary"
                          className={classes.tabs}
                          onChange={handleChangeRatingType}
                    >
                        <Tab className={classes.type} disableRipple label={"Movie: 0"}
                             value="movie"/>

                        <Tab className={classes.type} disableRipple label={"TV: 0"} value="tv"/>


                    </Tabs>

                </Grid>
                <Grid item md="auto" xs={12} className={classes.gridFilter}>
                    <Typography>Filter By: </Typography>
                    <FormControl className={classes.formControl}>
                        <Select onChange={handleSortBy} value={sortBy} className={classes.title}>
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
            </Grid>
            <Grid container justifyContent="space-between">
                <Typography>
                    You haven't rated any movies.

                </Typography>
                <Box style={{

                    minWidth: 260,
                    width: 260,
                    marginTop: 5,
                    overflow: "hidden",
                    border: "1px solid  rgba(227,227,227,1)",
                    borderRadius: 8,
                    background: "#fff",
                }}>

                    <Typography style={{
                        display: "flex",
                        alignItems: "center",
                        alignContent: "center",
                        fontWeight: 600,
                        color: "#fff",
                        backgroundColor: "rgba(128,91,231,1)",
                        padding: 20,
                    }}>
                        <TipsAndUpdatesIcon/>
                        Tip

                    </Typography>
                    <Typography style={{margin: 20}}>
                        You are not watching any discussions.
                    </Typography>
                </Box>
            </Grid>
        </>
    );
};

export default Rating;

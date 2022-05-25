import React from 'react';
import {Box, Grid, makeStyles, Typography} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    grid: {
        marginBottom: 20,
        marginTop: 20,
    },
    gridItem: {
        justifyContent: "space-between"
    },
    title: {
        fontWeight: 700, fontSize: "1.5em"
    },
    titleStats: {
        color: "rgba(3,37,65,1)",
        margin: "0 0 6px 0",
        fontSize: "1.2em",
        fontWeight: 500
    },
    contentStats: {
        fontSize: "3.6em",
        lineHeight: 1,
        marign: 0,
        fontWeight: 700,
    }

}));
const Overview = () => {
    const classes = useStyles()
    return (
        <Grid container spacing={2}>
            <Grid container className={classes.grid}>
                <Typography className={classes.title}>
                    Stats
                </Typography>
                <Grid container className={classes.gridItem}>
                    <Box>
                        <Typography className={classes.titleStats}> Total edits
                        </Typography>
                        <Typography className={classes.contentStats}>0</Typography>
                    </Box>
                    <Box>
                        <Typography className={classes.titleStats}> Total ratings
                        </Typography>
                        <Typography className={classes.contentStats}>0</Typography>
                    </Box>
                    <Box>
                        <Typography className={classes.titleStats}> Total edits
                        </Typography>
                        <Typography>You haven't logged any movies or TV shows.</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container className={classes.grid}>
                <Typography className={classes.title}>
                    Upcoming From Watchlist
                </Typography>
                <Grid container className={classes.gridItem}>
                    <Typography>
                        There are no upcoming movies on your watchlist.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container className={classes.grid}>
                <Typography className={classes.title}>
                    Recent Discussions
                </Typography>
                <Grid container className={classes.gridItem}>
                    <Typography>
                        You are not watching any discussions.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container className={classes.grid}>
                <Typography className={classes.title}>
                    Recent Activity
                </Typography>
                <Grid container className={classes.gridItem}>
                    <Typography>
                        You haven't made any recent edits.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Overview;

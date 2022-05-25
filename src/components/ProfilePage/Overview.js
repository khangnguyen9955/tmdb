import React from 'react';
import {Grid, Typography} from "@material-ui/core";

const Overview = () => {
    return (
        <Grid container spacing={2}>

            <Grid container>
                <Typography>
                    Stats
                </Typography>
                <Grid container>
                    <Typography>Total edits</Typography>
                    <Typography>Total ratings</Typography>
                    <Typography>Most Watched Genres</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Typography>
                    Upcoming From Watchlist
                </Typography>
                <Grid container>
                    <Typography>
                        There are no upcoming movies on your watchlist.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Typography>
                    Recent Discussions
                </Typography>
                <Grid container>
                    <Typography>
                        You are not watching any discussions.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Typography>
                    Recent Activity
                </Typography>
                <Grid container>
                    <Typography>
                        You haven't made any recent edits.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Overview;

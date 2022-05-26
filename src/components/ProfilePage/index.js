import React, {useState} from 'react';
import Background from "../common/Background";
import {Box, Container, Grid, makeStyles, Tab, Tabs, Typography} from "@material-ui/core";
import ProfileHeader from "./ProfileHeader";
import {Divider} from "@mui/material";
import {useSelector} from "react-redux";
import FilterGroup from "./FilterGroup";
import Filter from "./Filter";
import MovieCard from "./MovieCard";

const useStyles = makeStyles((theme) => ({
    container: {

        width: "100%",
        display: "flex",
        justifyContent: "center",
    },
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
        color: "#805be7",
    },
    link: {
        color: "#805be7",
        cursor: "pointer",
    },
    item: {padding: "6px 0 4px 0", marginRight: 40, borderBottom: "4px solid #fff"},

}))

const ProfilePage = () => {

    const {currentUser} = useSelector((state) => state.auth);
    const {isAuth} = useSelector((state) => state.auth);
    const {watchlist} = useSelector((state) => state.watchlist);
    const [type, setType] = useState("movie");
    const totalTv = watchlist.filter((movie) => movie.media_type === "tv");
    const totalMovie = watchlist.filter((movie) => movie.media_type === "movie");
    const [sortBy, setSortBy] = useState("date_added");
    const handleChangeType = (event, newValue) => {
        setType(newValue);
    }
    const handleSortBy = (e) => {
        setSortBy(e.target.value);
    }
    const [category, setCategory] = useState(0);
    const classes = useStyles();

    function handleChangeCateogry(e, newValue) {
        console.log(newValue);
        setCategory(newValue);
    }

    function handleNavigateWatchlist() {
        setCategory(3);
    }

    return (
        <>
            <Background children={<ProfileHeader user={currentUser}/>}/>
            <div className={classes.container}>
                <Tabs sx={{
                    backgroundColor: "#fff",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                }}
                      value={category}
                      indicatorColor="primary"
                      textColor="primary"
                      onChange={handleChangeCateogry}
                >
                    <Tab
                        className={classes.item}
                        label="Overview"

                    />
                    <Tab

                        className={classes.item}
                        label="Discussion"/>
                    <Tab

                        className={classes.item}
                        label="Rating"/>
                    <Tab

                        className={classes.item}
                        label="Watchlist"/>
                    <Tab

                        className={classes.item}
                        label="Lists"/>
                </Tabs>
            </div>
            <Divider/>

            <Container>
                <Grid>
                    {category === 0 && (
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
                                    <Typography className={classes.link} onClick={handleNavigateWatchlist}>
                                        Go to your watchlist
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
                            <Grid container className={classes.grid} style={{marginBottom: 60}}>
                                <Typography className={classes.title}>
                                    Recent Activity
                                </Typography>
                                <Grid container className={classes.gridItem}>
                                    <Typography>
                                        You haven't made any recent edits.
                                    </Typography>
                                    <Typography className={classes.link}>
                                        View more
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    )}
                    {category === 3 && (
                        <>
                            <FilterGroup totalMovie={totalMovie.length} totalTV={totalTv.length} type={type}
                                         handleChangeType={handleChangeType}/>
                            <Filter sortBy={sortBy} handleSortBy={handleSortBy}/>


                            {type === "movie" &&
                                totalMovie
                                    .sort((a, b) =>
                                        sortBy === "date_added"
                                            ? new Date(b.createdAt) - new Date(a.createdAt)
                                            : sortBy === "release_date"
                                                ? new Date(b.release_date) - new Date(a.release_date)
                                                : b.popularity - a.popularity
                                    )
                                    .map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
                            {type === "tv" &&
                                totalTv
                                    .sort((a, b) =>
                                        sortBy === "date_added"
                                            ? new Date(b.createdAt) - new Date(a.createdAt)
                                            : sortBy === "release_date"
                                                ? new Date(b.release_date) - new Date(a.release_date)
                                                : b.popularity - a.popularity
                                    )
                                    .map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
                        </>
                    )
                    }
                </Grid>
            </Container>
        </>
    );
};

export default ProfilePage;

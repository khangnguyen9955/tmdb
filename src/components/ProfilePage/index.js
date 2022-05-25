import React, {useState} from 'react';
import Background from "../common/Background";
import {Container, Grid, makeStyles, Tab, Tabs} from "@material-ui/core";
import FilterGroup from "./FilterGroup";
import Filter from "./Filter";
import ProfileHeader from "./ProfileHeader";
import {useSelector} from "react-redux";
import MovieCard from "./MovieCard";
import {Divider} from "@mui/material";
import Overview from "./Overview";

const useStyles = makeStyles((theme) => ({
    container: {

        width: "100%",
        display: "flex",
        justifyContent: "center",
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
    const [category, setCategory] = useState(0);

    const handleChangeType = (event, newValue) => {
        setType(newValue);
    }
    const handleSortBy = (e) => {
        setSortBy(e.target.value);
    }
    const classes = useStyles();


    function handleChangeCateogry(e, newValue) {
        console.log(newValue)
        setCategory(newValue);
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
                        noWrap
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
                        <Overview/>
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

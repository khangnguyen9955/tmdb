import React, {useState} from 'react';
import Background from "../common/Background";
import {Container, Grid} from "@material-ui/core";
import FilterGroup from "./FilterGroup";
import Filter from "./Filter";
import ProfileHeader from "./ProfileHeader";
import {useSelector} from "react-redux";
import MovieCard from "./MovieCard";


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


    return (
        <>
            <Background children={<ProfileHeader user={currentUser}/>}/>
            <Container>
                <Grid>
                    <FilterGroup totalMovie={totalMovie.length} totalTV={totalTv.length} type={type}
                                 handleChangeType={handleChangeType}/>
                    <Filter sortBy={sortBy} handleSortBy={handleSortBy}/>
                </Grid>
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
            </Container>
        </>
    );
};

export default ProfilePage;

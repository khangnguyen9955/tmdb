import React from 'react';
import Background from "../common/Background";
import {Container, Grid} from "@material-ui/core";
import FilterGroup from "./FilterGroup";
import Filter from "./Filter";
import ProfileHeader from "./ProfileHeader";
import {useSelector} from "react-redux";


const ProfilePage = () => {
    const {currentUser} = useSelector((state) => state.auth);
    const {isAuth} = useSelector((state) => state.auth);
    const {watchlist} = useSelector((state) => state.watchlist);

    return (
        <>
            <Background children={<ProfileHeader user={currentUser}/>}/>
            <Container>
                <Grid>
                    <FilterGroup/>
                    <Filter/>
                </Grid>
            </Container>
        </>
    );
};

export default ProfilePage;

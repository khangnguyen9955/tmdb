import React from 'react';
import Background from "../common/Background";
import {Container, Grid} from "@material-ui/core";
import FilterGroup from "./FilterGroup";
import Filter from "./Filter";
import ProfileHeader from "./ProfileHeader";

const ProfilePage = () => {
    return (
        <>
            <Background children={<ProfileHeader user={{}}/>}/>
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

import React from 'react';
import {Container} from "@material-ui/core";
import InforLogin from "./InforLogin";
import LoginForm from "./LoginForm";

const LoginPage = () => {

    return (
        <Container style={{marginTop: 30, marginBottom: 30}}>
            <InforLogin/>
            <LoginForm/>
        </Container>
    );
};

export default LoginPage;

import React from 'react';
import {Container} from "@material-ui/core";
import InforLogin from "./InforLogin";
import LoginForm from "./LoginForm";

const LoginPage = () => {

	return (
		<Container style={{minHeight: 600,}}>
			<InforLogin/>
			<LoginForm/>
		</Container>
	);
};

export default LoginPage;

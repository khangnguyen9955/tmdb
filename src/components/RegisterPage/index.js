import React from 'react';
import {Container, Grid} from "@mui/material";
import AddtionalInfor from "./AddtionalInfor";
import RegisterForm from "./RegisterForm";

const RegisterPage = () => {
	return (
		<Container style={{marginTop: 64}}>
			<Grid container spacing={3}>
				<AddtionalInfor/>
				<RegisterForm/>
			</Grid>
		</Container>
	);
};

export default RegisterPage;
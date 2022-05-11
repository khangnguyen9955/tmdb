import React from 'react';
import {Container, Grid} from "@mui/material";
import AddtionalInfor from "./AddtionalInfor";
import RegisterForm from "./RegisterForm";

const RegisterPage = () => {
	return (
		<Container>
			<Grid container spacing={3}>
				<AddtionalInfor/>
				<RegisterForm/>
			</Grid>
		</Container>
	);
};

export default RegisterPage;
import React from 'react';
import {makeStyles} from "@material-ui/core";
import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom"
import {registerUser} from "../../redux/userActions";
import {useDispatch} from "react-redux";

const useStlyes = makeStyles((theme) => (
	{
		container: {
			width: "100%",
			display: "flex",
			justifyContent: "center",
			alignItems: "flex-start",
			alignContent: "flex-start",

		},
		linkText: {
			color: "rgb(1,180,228,1)",
		},
		containerText: {
			display: "flex",
			alignItems: " flex-start",
			alignContent: "flex-start",
			width: "100%",
			maxWidth: 1400,
			paddingTop: 30,
			paddingBottom: 30,
			paddingLeft: 40,
			paddingRight: 40,
		},
		title: {
			margin: "0 0 4px 0",
			fontWeight: 600,
			fontSize: "1.5em",
		},
		form: {
			width: "100%",
			padding: 0,
		},
		loginBtn: {},
		resetPassword: {},
	}
));

const RegisterForm = () => {
	const classes = useStlyes();
	const {handleSubmit, formState: {errors}, register} = useForm();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	// const {error, isLoading} = useSelector((state) => state.user);
	const onSubmit = (data) => {
		data.username = data.username.toLowerCase();
		dispatch(registerUser(data));
		navigate("/");
	}
	return (
		<Grid item md={9} style={{marginTop: 40}}>
			<Box mb={1}>
				<h2 className={classes.title}>Sign up for an account</h2>
				<Typography>
					Signing up for an account is free and easy. Fill out the form below to
					get started. JavaScript is required to to continue.
				</Typography>
			</Box>
			<form onSubmit={handleSubmit(onSubmit)} noValidate>
				<Box>
					<TextField
						required
						fullWidth
						variant="outlined"
						autoComplete="firstName"
						size="small"
						label="First Name"
						margin="normal"
						{...register("firstName", {required: "Required"})}
					/>
					<TextField
						required
						fullWidth
						variant="outlined"
						autoComplete="lastName"
						size="small"
						label="Last Name"
						margin="normal"
						{...register("lastName", {required: "Required"})}
					/>
					<TextField
						required
						fullWidth
						variant="outlined"
						autoComplete="username"
						size="small"
						label="Username (minimum 6 characters)"
						margin="normal"
						{...register("username", {required: "Required", minLength: 6})}
					/>
					<TextField
						variant="outlined"
						required
						fullWidth
						name="password"
						type="password"
						autoComplete="current-password"
						size="small"
						label="Password (minimum 6 characters)"
						margin="normal"
						{...register("password", {required: "Required", minLength: 6})}

					/>
				</Box>
				{(
					 errors.username || errors.password || errors.loginUser || errors.lastName || errors.firstName
				 ) && (
					 <div>
						 <Typography color="error">
							 {errors.firstName?.type === "required" && (
								 "Please enter your first name"
							 )}
						 </Typography>
						 <Typography color="error">
							 {errors.lastName?.type === "required" && (
								 "Please enter your last name"
							 )}
						 </Typography>
						 <Typography color="error">
							 {errors.username?.type === "required" && (
								 "Please enter your username"
							 )}
						 </Typography>
						 <Typography color="error">
							 {errors.password?.type === "required" && (
								 "Please enter your password"
							 )}
						 </Typography>
						 <Typography color="error">
							 {errors.username?.type === "minLength" && (
								 "Your username must be at least 6 characters long"
							 )}
						 </Typography>
						 <Typography color="error">
							 {errors.password?.type === "minLength" && (
								 "Your password must be at least 6 characters long"
							 )}
						 </Typography>
					 </div>
				 )}

				<Typography style={{marginTop: 16}}>
					By clicking the "Sign up" button below, I certify that I have read and
					agree to the TMDb terms of use and privacy policy.
				</Typography>
				<Box display="flex" mt={2}>
					<Button type="submit" variant="contained" style={{backgroundColor: "rgba(1,180,228,1)"}}>
						Register
					</Button>
					<Button component={Link} to="/" style={{color: "rgba(1,180,228,1)"}}>
						Cancel
					</Button>
					{/*{isLoading && <CircularProgress/>}*/}
				</Box>
			</form>
		</Grid>
	);
};
export default RegisterForm;

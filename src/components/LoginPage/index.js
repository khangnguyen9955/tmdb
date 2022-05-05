import React from 'react';
import {makeStyles} from "@material-ui/core";
import {Box, Button, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux";
import {loginUser} from "../../redux/userActions";

const useStlyes = makeStyles((theme) => (
	{
		container: {
			width: "100%",
			display: "flex",
			justifyContent: "center",
			alignItems: "flex-start",
			alignContent: "flex-start",
			marginTop: 64,

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

const LoginPage = () => {
	const classes = useStlyes();
	const {handleSubmit, errors, register} = useForm();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	// const {error, isLoading} = useSelector((state) => state.user);
	const onSubmit = (data) => {
		console.log(data)
		data.username = data.username.toLowerCase();
		dispatch(loginUser(data));
		navigate("/");

	}

	return (
		<div className={classes.container}>
			<div className={classes.containerText}>
				<div className={classes.wrapper}>
					<h2 className={classes.title}>Login to your Account </h2>
					<Box>
						<p>
							In order to use the editing and rating capabilities of TMDB, as well as get personal recommendations you will need to login to your account. If you do
							not
							have an account, registering for an account is free and simple.<a href="" className={classes.linkText}> Click here </a> to get started.
						</p>
						<p>
							If you signed up but didn't get your verification email, <a href="" className={classes.linkText}>click here </a>to have it resent.
						</p>
					</Box>
					<div>
						<form onSubmit={handleSubmit(onSubmit)
						} noValidate>
							<Box>
								<TextField
									required
									fullWidth
									variant="outlined"
									autoComplete="username"
									autoFocus
									size="small"
									label="Username"
									margin="normal"
									{...register("username", {required: "Required"})}
								/>
								<TextField
									variant="outlined"
									required
									fullWidth
									name="password"
									type="password"
									autoComplete="current-password"
									size="small"
									label="Password"
									margin="normal"
									{...register("password", {required: "Required"})}

								/>
							</Box>
							{/*{(*/}
							{/*	 errors.username || errors.password*/}
							{/* ) && (*/}
							{/*	 // || error.loginUser*/}
							{/*	 <div>*/}
							{/*		 <Typography color="error">*/}
							{/*			 /!*{error.loginUser ? error.loginUser : "Please enter your username and password"}*!/*/}
							{/*			 Please enter your username and password*/}
							{/*		 </Typography>*/}
							{/*	 </div>*/}
							{/* )}*/}
							<Box display="flex" mt={2}>
								<Button type="submit" variant="contained" color="primary">
									Login
								</Button>
								<Button component={Link} to="/" color="primary">
									Cancel
								</Button>
								{/*{isLoading && <CircularProgress/>}*/}
							</Box>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;

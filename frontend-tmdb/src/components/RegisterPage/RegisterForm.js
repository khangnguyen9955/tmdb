import React from 'react';
import {CircularProgress, makeStyles} from "@material-ui/core";
import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom"
import {registerUser} from "../../redux/userActions";
import {useDispatch, useSelector} from "react-redux";

const useStyles = makeStyles((theme) => (
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
    const classes = useStyles();
    const {handleSubmit, formState: {errors}, register} = useForm();
    const dispatch = useDispatch();
    const {error, isLoading} = useSelector((state) => state.auth);
    console.log(error);
    const onSubmit = (data) => {
        data.username = data.username.toLowerCase();
        dispatch(registerUser(data));
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
                        error={!!errors.firstName}
                        {...register("firstName", {required: "Required"})}
                        helperText={
                            errors.firstName &&
                            (errors.firstName.type === "required"
                                ? "Please enter your first name"
                                : null)
                        }
                    />
                    <TextField
                        required
                        fullWidth
                        variant="outlined"
                        autoComplete="lastName"
                        size="small"
                        label="Last Name"
                        margin="normal"
                        error={!!errors.lastName}
                        {...register("firstName", {required: "Required"})}
                        helperText={
                            errors.lastName &&
                            (errors.lastName.type === "required"
                                ? "Please enter your last name"
                                : null)
                        }
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
                        error={!!(errors.username || error.length > 0)}
                        helperText={
                            error.length > 0
                                ?
                                error
                                : errors.username &&
                                (errors.username.type === "required"
                                    ? "Please enter your username"
                                    : errors.username.type === "minLength"
                                        ? "Username must be at least 6 characters"
                                        : null)
                        }
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
                        error={!!errors.password}
                        label="Password (minimum 6 characters)"
                        margin="normal"
                        helperText={
                            errors.password &&
                            (errors.password.type === "required"
                                ? "Please enter your password"
                                : errors.password.type === "minLength"
                                    ? "Password must be at least 6 characters"
                                    : null)
                        }
                        {...register("password", {required: "Required", minLength: 6})}

                    />
                </Box>

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
                    {isLoading && <CircularProgress/>}
                </Box>
            </form>
        </Grid>
    );
};
export default RegisterForm;

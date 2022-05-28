import React from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../../redux/userActions";

const LoginForm = () => {
    const {handleSubmit, formState: {errors}, register} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {error, isFetching} = useSelector((state) => state.auth);

    const onSubmit = (data) => {
        data.username = data.username.toLowerCase();
        dispatch(loginUser(data));

        if (!error.login) {
            navigate("/profile");
        }
    }


    return (
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
                    label="Password"
                    margin="normal"
                    {...register("password", {required: "Required", minLength: 6})}

                />
            </Box>
            {(
                errors.username || errors.password || errors.loginUser
            ) && (
                <div>
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
            {error.login && (
                <Typography color="error">
                    {error.login}
                </Typography>)
            }

            <Box display="flex" mt={2}>
                <Button type="submit" variant="contained"
                        style={{backgroundColor: "rgba(1,180,228,1)", marginRight: 5}}>
                    Login
                </Button>
                <Button component={Link} to="/" style={{color: "rgba(1,180,228,1)"}}>
                    Cancel
                </Button>
                {/*{isLoading && <CircularProgress/>}*/}
            </Box>
        </form>
    );
};

export default LoginForm;

import React from 'react';
import {Avatar, Box, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {DateTime} from "luxon";

const useStyles = makeStyles((theme) => (
	{
		avatar: {
			borderRadius: "50%",
		},


	}
))

const ProfileHeader = ({user}) => {
	const classes = useStyles();
	return (
		<Toolbar>
			<Box>
				<Avatar className={classes.avatar}>
					{user.username && user.username[0].toUpperCase()}
				</Avatar>
			</Box>
			<Box>
				<Typography>{user.username}</Typography>
				<Typography>Member since {DateTime.fromISO(user.createdAt).toFormat("MMMM yyyy")}</Typography>
			</Box>
		</Toolbar>
	);
};

export default ProfileHeader;

import React from "react";
import {
  Avatar,
  Box,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { DateTime } from "luxon";

const useStyles = makeStyles((theme) => ({
  avatar: {
    borderRadius: "50%",
    marginRight: 20,
    height: 100,
    minWidth: 100,
  },
  background: {
    height: 260,
    padding: 40,
    flexWrap: "nowrap",
    color: "#fff",
    display: "flex",
    maxWidth: 1300,
    width: "100%",
  },
  username: {
    fontWeight: 700,
    fontSize: "2em",
  },
  date: {
    opacity: 0.7,
    fontSize: "1.1em",
  },
}));

const ProfileHeader = ({ user }) => {
  const classes = useStyles();
  return (
    <Toolbar className={classes.background}>
      <Box>
        <Avatar className={classes.avatar}>
          {/*   I see that the Avatar icon will be prettier than  putting the username here */}
        </Avatar>
      </Box>
      <Box>
        <Typography className={classes.username}> {user.username}</Typography>
        <Typography className={classes.date}>
          Member since {DateTime.fromISO(user.createdAt).toFormat("MMMM yyyy")}
        </Typography>
      </Box>
    </Toolbar>
  );
};

export default ProfileHeader;

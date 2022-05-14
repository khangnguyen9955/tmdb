import React, {useState} from 'react';
import {Avatar, Divider, IconButton, makeStyles, Menu, MenuItem} from "@material-ui/core";
import {purple} from "@mui/material/colors";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {logOut} from "../../redux/userActions";

const useStyles = makeStyles((theme) => (
	{
		purple: {
			backgroundColor: purple[800],
			color: theme.palette.getContrastText(purple[800]),
		},
		profileName: {
			fontWeight: 600,
			alignItems: "center",
			padding: "0 20px",
		},
		profileItem: {
			padding: "6px 20px",
			fontSize: "0.9em",
			display: "flex",
			alignItems: "center", alignContent: "center",
			fontWeight: 600,
			color: "rgba(0,0,0,0.6)",
			backgroundColor: "transparent",
		},
		menu: {
			'& .MuiMenu-paper': {
				width: 180,
			}
		}
	}
))


const Logged = ({username}) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [anchorEl, setAnchorEl] = useState(null);
	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const renderMenu = (
		<Menu anchorEl={anchorEl}
		      getContentAnchorEl={null}
		      anchorOrigin={{
			      vertical: "bottom",
			      horizontal: "center",
		      }}
		      transformOrigin={{
			      vertical: "top",
			      horizontal: "center",
		      }}
		      className={classes.menu}
		      keepMounted
		      open={!!anchorEl}
		      onClose={handleMenuClose}
		>
			<MenuItem component={Link} to="" className={classes.profileName}>
				{username}

			</MenuItem>
			<a href="" style={{
				textDecoration: "none",
				padding: "6px 20px",
				fontSize: "0.8em",
				display: "flex",
				flexWrap: "wrap",
				alignContent: "center",
				alignItems: "center",
				fontWeight: 400,
				color: "rgba(0,0,0,0.5)",
			}}>View profile</a>
			<Divider/>
			<MenuItem component={Link} to="/profile" onClick={handleMenuClose} className={classes.profileItem}>
				Watchlist
			</MenuItem>
			<MenuItem
				className={classes.profileItem}
				onClick={() => {
					handleMenuClose();
					dispatch(logOut());
				}}
			>
				Logout
			</MenuItem>
		</Menu>


	);
	return (
		<>
			<IconButton
				edge="end"
				onClick={(event) => setAnchorEl(event.currentTarget)}
				size="small"
			>
				<Avatar className={classes.purple}>
					{username && username[0].toUpperCase()}
				</Avatar>
			</IconButton>
			{renderMenu}
		</>
	);
};

export default Logged;

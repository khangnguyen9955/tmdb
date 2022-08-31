import {CardMedia, IconButton, makeStyles, Menu, MenuItem, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import logo_header from "../../assets/logo_header.svg";
import {Link} from "react-router-dom";
import {useState} from "react";

const useStyles = makeStyles((theme) => (
	{
		logo: {
			width: 160,
			borderRadius: 0,
		},
		centerLogo: {
			[theme.breakpoints.down("sm")]: {
				position: "absolute",
				left: "50%",
				transform: "translateX(-50%)",
			},
		},
		links: {
			marginLeft: theme.spacing(3),
			"& > a": {
				marginRight: theme.spacing(3),
			},
			[theme.breakpoints.down("sm")]: {
				display: "none",
			},
		},
		menuButton: {
			display: "none",
			color: theme.palette.getContrastText(theme.palette.primary.main),
			[theme.breakpoints.down("sm")]: {
				display: "inline-block",
			},
		},
	}
));


const LeftNav = () => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);

	const handleMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};


	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			getContentAnchorEl={null}
			anchorOrigin={{
				vertical: "bottom",
				horizontal: "left",
			}}
			transformOrigin={{
				vertical: "top",
				horizontal: "left",
			}}
			keepMounted
			open={!!anchorEl}
			onClose={handleMenuClose}
		>
			<MenuItem
				component={Link}
				to="/popular/movie/1"
				onClick={handleMenuClose}
			>
				Movies
			</MenuItem>
			<MenuItem
				component={Link}
				to="/popular/tv/1"
				onClick={handleMenuClose}
			>
				TV Shows
			</MenuItem>
			<MenuItem
				component={Link}
				to="/popular/person/1"
				onClick={handleMenuClose}
			>
				People
			</MenuItem>
		</Menu>
	);
	return (
		<>
			<IconButton
				edge="start"
				onClick={handleMenuOpen}
				className={classes.menuButton}
			>
				<MenuIcon/>
			</IconButton>
			<Link to="/" className={classes.centerLogo}>
				<CardMedia
					component="img"
					image={logo_header}
					title="logo"
					alt="logo"
					className={classes.logo}
				/>
			</Link>
			<Typography variant="subtitle1" className={classes.links}>
				<Link to="/popular/movie/1">Movies</Link>
				<Link to="/popular/tv/1">TV Shows</Link>
				<Link to="/popular/person/1">People</Link>
			</Typography>
			{renderMenu}
		</>
	);
};

export default LeftNav;

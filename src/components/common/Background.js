import React from 'react';
import {makeStyles} from "@material-ui/core";
import {alpha} from "@material-ui/core/styles";
import company_header from "../../assets/company_header.jpeg";

const useStyles = makeStyles((theme) => (
	{
		header: {
			position: "relative",
			backgroundImage: `linear-gradient(to right, 
		   ${alpha(theme.palette.secondary.main, 0.9)},
            ${alpha(theme.palette.primary.main, 0.9)}),
      url(${company_header})`,
			color: theme.palette.getContrastText((
				theme.palette.primary.main
			)),
		},
	}
));

const Background = ({children}) => {
	const classes = useStyles();
	return (
		<div className={classes.header}>
			{children}
		</div>
	);
};

export default Background;

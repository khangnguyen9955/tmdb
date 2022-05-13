import {Box, makeStyles, Typography, withStyles} from "@material-ui/core";
import {green} from "@material-ui/core/colors";
import {ToggleButton, ToggleButtonGroup} from "@material-ui/lab";

const StyledToggleButton = withStyles((theme) => (
	{
		root: {
			// Typography subtitle1
			fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
			fontWeight: "bold",
			fontSize: "1rem",
			lineHeight: 1.75,
			letterSpacing: "0.00938em",

			color: theme.palette.primary.main,
			textTransform: "none",
			borderRadius: 15,
			padding: "0px 16px",
			marginLeft: 16,
			"&$selected": {
				backgroundColor: theme.palette.primary.main,
				"& $label": {
					color: "#fff",
					// text gradient
					backgroundImage: `linear-gradient(to right, ${green[100]}, ${green["A400"]})`,
					backgroundClip: "text",
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "transparent",

					// cho safari khong nhan WebkitBackgroundClip
					display: "inline",
				},
				"&:hover": {
					backgroundColor: theme.palette.primary.main,
				},
			},
		},
		selected: {},
		label: {},
	}
))(ToggleButton);


const useStyles = makeStyles((theme) => (
	{}
));

const FilterGroup = ({
	                     title,
	                     value,
	                     handleChange,
	                     value1,
	                     value2,
	                     label1,
	                     label2,
                     }) => {
	const classes = useStyles();
	return (
		<Box display="flex" alignItems="center" paddingLeft="40px" width="100%">
			<Typography variant="h6">{title}</Typography>
			<ToggleButtonGroup
				value={value}
				exclusive
				onChange={handleChange}
				size="small"

			>
				<StyledToggleButton value={value1}>
					{label1}
				</StyledToggleButton>
				<StyledToggleButton value={value2}>
					{label2}
				</StyledToggleButton>
			</ToggleButtonGroup>
		</Box>
	);
};

export default FilterGroup;

import { Box, makeStyles, Typography, withStyles } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  buttonGroup: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "bold",
    fontSize: "1rem",
    lineHeight: 1.75,
    letterSpacing: "0.00938em",
    color: theme.palette.primary.main,
    textTransform: "none",
    borderRadius: 15,
    padding: theme.spacing(0, 2),
    marginLeft: theme.spacing(2),
    "&. selected": {
      backgroundColor: theme.palette.primary.main,
      "&. label": {
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
}));

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
        className={classes.buttonGroup}
        size="small"

      >
        <ToggleButton value={value1} sx={{ fontWeight: "600" }}>
          {label1}
        </ToggleButton>
        <ToggleButton value={value2} sx={{ fontWeight: "600" }}>
          {label2}
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default FilterGroup;

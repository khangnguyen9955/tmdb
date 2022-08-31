import React from "react";
import { makeStyles, Toolbar } from "@material-ui/core";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { Typography } from "@mui/material";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import PublicIcon from "@mui/icons-material/Public";
import LinkIcon from "@mui/icons-material/Link";

const useStyles = makeStyles(() => ({
  layout: {
    backgroundColor: "rgba(3,37,65,0.7)",
    width: "100%",
    padding: 0,
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    backdropFilter: "blur(3px)",
  },
  toolbar: {
    width: "100%",
    padding: "0 40px",
    maxWidth: 1300,
  },
  item: {
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    marginRight: 20,
    padding: "10px 0",
    opacity: 0.7,
  },
}));
const CompanyInfo = ({ details }) => {
  const classes = useStyles();
  return (
    <div className={classes.layout}>
      <Toolbar className={classes.toolbar}>
        {details.name && (
          <div className={classes.item}>
            <AssignmentIndIcon fontSize={"small"} />
            <Typography>{details.name}</Typography>
          </div>
        )}
        {details.headquarters && (
          <div className={classes.item}>
            <FmdGoodIcon fontSize={"small"} />
            <Typography>{details.headquarters}</Typography>
          </div>
        )}
        {details.origin_country && (
          <div className={classes.item}>
            <PublicIcon fontSize={"small"} />
            <Typography>{details.origin_country}</Typography>
          </div>
        )}
        {details.homepage && (
          <div className={classes.item}>
            <LinkIcon fontSize={"small"} />
            <Typography component={"a"} href={details.homepage} target="_blank">
              Home Page
            </Typography>
          </div>
        )}
      </Toolbar>
    </div>
  );
};

export default CompanyInfo;

import { Button, makeStyles, Tooltip, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import LinkIcon from "@material-ui/icons/Link";
import isoLangs from "../common/isoLangs";

const useStyles = makeStyles((theme) => ({
  status: {
    fontSize: "1rem",
    fontWeight: 600,
    lineHeight: 1.75,
  },
  statusDetails: {
    fontSize: "0.875rem",
    lineHeight: 1.43,
  },
  keyword: {
    marginTop: 8,
    marginRight: 8,
  },
  keywordDetails: {},
}));

const Details = ({ details }) => {
  const classes = useStyles();

  return (
    <>
      <div>
        <Tooltip title="Visit Homepage" placement="top" arrow>
          <a href={details.homepage} target="_blank" rel="noopener noreferrer">
            <LinkIcon fontSize="large" />
          </a>
        </Tooltip>
      </div>
      <div>
        <Typography className={classes.status}>Status</Typography>
        <Typography className={classes.statusDetails}>
          {details.status}
        </Typography>
      </div>

      <div>
        <Typography className={classes.status}>Original Language</Typography>
        <Typography className={classes.statusDetails}>
          {isoLangs[details.original_language].name
            ? isoLangs[details.original_language].name
            : ""}
        </Typography>
      </div>

      {!isNaN(details.budget) && (
        <>
          <div>
            <Typography className={classes.status}>Budget</Typography>
            <Typography className={classes.statusDetails}>
              {details.budget ? "$" + details.budget.toLocaleString() : "-"}
            </Typography>
          </div>

          <div>
            <Typography className={classes.status}>Revenue</Typography>
            <Typography className={classes.statusDetails}>
              {details.revenue ? "$" + details.revenue.toLocaleString() : "-"}
            </Typography>
          </div>
        </>
      )}
      {details.networks && (
        <>
          <div>
            <Typography className={classes.status}>Network</Typography>
            {details.networks.logo_path ? (
              <Link to="#">
                <img
                  src={details.networks.logo_path}
                  alt={details.networks.name}
                  title={details.networks.name}
                />
              </Link>
            ) : (
              "-"
            )}
          </div>
          <div>
            <Typography className={classes.status}>Type</Typography>
            <Typography className={classes.statusDetails}>
              {details.type}
            </Typography>
          </div>
        </>
      )}
      <div style={{ marginBottom: 10 }}>
        <Typography className={classes.status}>Keywords</Typography>
        {details.keywords.length > 0 ? (
          details.keywords.map((keyword) => (
            <Button
              key={keyword.id}
              component={Link}
              to={`/keyword/${keyword.id}`}
              variant="contained"
              color="primary"
              className={classes.keyword}
            >
              <Typography variant="body2" className={classes.keywordDetails}>
                {keyword.name}
              </Typography>
            </Button>
          ))
        ) : (
          <Typography>No keywords have been added.</Typography>
        )}
      </div>
    </>
  );
};

export default Details;

import React from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 700,
    fontSize: "1.5em",
    width: "100%",
    fontFamily: "'Source Sans Pro', Arial, sans-serif",
  },
}));

const Discussion = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.grid}>
      <Grid container item>
        <Typography className={classes.title}>My Discussions</Typography>
        <Grid
          container
          item
          style={{ display: "flex", justifyContent: "space-between" }}
          xs={12}
        >
          <Typography
            noWrap
            style={{
              marginTop: 5,

              maxHeight: 50,
              width: "70%",
              border: "1px solid  rgba(227,227,227,1)",
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 20px",
              color: "#000",
              background: "#fff",
              boxShadow: " 0 2px 8px rgb( 0 0 0 / 10%)",
            }}
          >
            You are not watching any discussions.
          </Typography>
          <Box
            style={{
              minWidth: 260,
              width: 260,
              marginTop: 5,

              overflow: "hidden",
              border: "1px solid  rgba(227,227,227,1)",
              borderRadius: 8,
              background: "#fff",
            }}
          >
            <Typography
              style={{
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                justifyContent: "space-between",
                fontWeight: 600,
                color: "#fff",
                backgroundColor: "rgba(128,91,231,1)",
                padding: 20,
              }}
            >
              My Active boards
            </Typography>
            <Typography style={{ margin: 20 }}>
              You are not watching any discussions.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Discussion;

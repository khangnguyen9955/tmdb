import { CardMedia, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    backgroundImage: "linear gradient",
  },
  container: {},
}));

function Header({ details }) {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Container className={classes.container}>
        <Grid container spacing={3} alignItems="center" justify="center">
          <Grid item md={3} xs={6}>
            <CardMedia
              component="img"
              alt={details.title}
              image={details.poster_path}
              title={details.title}
              loading="lazy"
            />
          </Grid>
          <Grid item container spacing={2} md={9} xs={12} direction="column" pl={4}>
            <Grid item>
                    <Typography>
                    {details.title}{" "}
                    {details.release_date && (
                            <Typography>
                                {`(${new Date(details.release_date).getFullYear()})`}
                            </Typography>
                    )}
                    </Typography>   
                    <Typography>
                        
                        
                        
                        
                        
                        
                    </Typography>             
                
                
                </Grid>

            <Grid>User score</Grid>

            <Grid>Overview</Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Header;

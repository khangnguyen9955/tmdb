import React from "react";
import { Box, CardActionArea, makeStyles } from "@material-ui/core";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },
  card: {},
  cardMedia: {},
}));

const List = () => {
    const classes = useStyles();
    return (

        <Container className={classes.container}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia component="img" className={classes.cardMedia}/>
                    <CardContent></CardContent>
                </CardActionArea>
            </Card>

            <Box>
                <Typography>Create new list</Typography>
            </Box>
        </Container>

    );
};

export default List;

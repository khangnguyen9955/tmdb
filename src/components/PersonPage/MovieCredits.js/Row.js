import React, { useState } from "react";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import StarRateIcon from "@mui/icons-material/StarRate";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Popover,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  cellTitle: { paddingLeft: 4, width: "90%" },
  cellIcon: {
    padding: "6px 0",
    textAlign: "center",
  },
  card: {
    display: "flex",
    alignItems: "center",
    padding: 8,
  },
  cardActionArea: {
    height: 150,
    maxWidth: 100,
    borderRadius: 0,
  },
  cardContent: {
    width: 400,
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
    overflow: "hidden",
    alignSelf: "flex-start",
    margin: 8,
  },
  voteAverage: {
    display: "inline-flex",
    padding: "3px 10px",
    backgroundColor: "#142851",
    color: "white",
    borderRadius: 15,
    fontSize: 15,
  },
  title: {
    fontWeight: 600,
    color: "black",
  },
}));
const Row = ({ row }) => {
  const classes = useStyles();
  const [anchor, setAnchor] = useState(null);

  const handleClick = (e) => {
    setAnchor(e.currentTarget);
  };
  const handleClose = () => {
    setAnchor(null);
  };
  const open = Boolean(anchor);

  return (
    <>
      <TableRow key={row.id} className={classes.table}>
        <TableCell align="center">
          {row.release_date ? new Date(row.release_date).getFullYear() : "-"}
        </TableCell>
        <TableCell align="left" className="classes.cellIcon">
          <IconButton onClick={handleClick}>
            <RadioButtonUncheckedIcon />
          </IconButton>
        </TableCell>
        <TableCell className={classes.cellTitle}>
          <Typography
            component={Link}
            to={`/movie/${row.id}`}
            className={classes.title}
            sx={{ fontWeight: 600, fontSize: "1em" }}
          >
            {row.title}
          </Typography>

          {row.character && (
            <Typography
              component="span"
              sx={{ fontWeight: 400, fontSize: "1em" }}
            >
              {" "}
              as {row.character}
            </Typography>
          )}

          {row.job && (
            <Typography color="textSecondary" component="span">
              {" "}
              ... {row.job}
            </Typography>
          )}
        </TableCell>
      </TableRow>
      <Popover
        open={open}
        anchorEl={anchor}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Card className={classes.card}>
          <CardActionArea className={classes.cardActionArea}>
            <CardMedia
              component="img"
              alt={row.title}
              title={row.title}
              image={row.poster_path}
              loading="lazy"
              className={classes.cardActionArea}
            />
          </CardActionArea>
          <Box className={classes.cardContent}>
            <Box display="flex" alignItems="baseline">
              <Typography
                component={Link}
                to={`/movie/${row.id}`}
                noWrap
                gutterBottom
                sx={{
                  fontWeight: 600,
                  fontSize: "1.3em",
                  color: "black",
                  marginRight: 4,
                }}
              >
                {row.title}
              </Typography>
              <span className={classes.voteAverage}>
                <StarRateIcon fontSize="small" />
                {row.vote_average.toFixed(1)}
              </span>
            </Box>
            <Typography>{row.overview}</Typography>
          </Box>
        </Card>
      </Popover>
    </>
  );
};

export default Row;

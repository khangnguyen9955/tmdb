import React, { useState } from "react";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
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

const useStyles = makeStyles((theme) => ({}));
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
      <TableRow className={classes.table}>
        <TableCell>
          {row.release_date ? new Date(row.release_date).getFullYear() : "-"}
        </TableCell>
        <TableCell>
          <IconButton>
            <RadioButtonUncheckedIcon />
          </IconButton>
        </TableCell>
        <TableCell>{row.title}</TableCell>
        {row.character && (
          <TableCell>
            <Typography> as {row.character}</Typography>
          </TableCell>
        )}

        {row.job && (
          <TableCell>
            <Typography> ... {row.job}</Typography>
          </TableCell>
        )}
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
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={row.title}
              title={row.title}
              image={row.image}
              loading="lazy"
              className={classes.img}
            />
          </CardActionArea>

          <CardContent></CardContent>
        </Card>
        <Box>
          <Box>
            <Typography>{row.title}</Typography>
            <span>{row.vote_average.toFixed(1)}</span>
          </Box>
          <Typography>{row.overview}</Typography>
        </Box>
      </Popover>
    </>
  );
};

export default Row;

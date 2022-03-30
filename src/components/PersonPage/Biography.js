import { Button, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
const useStyles = makeStyles((theme) => ({
  readMore: {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 9,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  preLine: {
    whiteSpace: "pre-line",
  },
  button: {
    display: "flex",
    justifyContent: "flex-end",
    overflowAnchor: "none",
  },
  biography: {
    fontWeight: "600 !important",
    fontSize: "1.3em !important",
    marginBottom: "8px !important",
  },
}));

const Biography = ({ person }) => {
  const biographyRef = useRef("");
  const [lines, setLines] = useState(0);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    const p = biographyRef.current;
    if (p) {
      // height of each line
      const lineHeight = parseInt(getComputedStyle(p).lineHeight);
      // height of whole biography
      const bHeight = p.offsetHeight;
      // total lines of biography
      const line = bHeight / lineHeight;
      setLines(line);
    }
  }, []);
  const handleClick = () => {
    setChecked(!checked);
  };
  const classes = useStyles();
  return (
    <>
      <Typography gutterBottom variant="h4">
        {person.name}
      </Typography>
      <Box>
        <Typography className={classes.biography}>Biography</Typography>
        {person.biography ? (
          <>
            <Typography
              className={clsx(classes.preLine, {
                [classes.readMore]: !checked && lines > 9,
              })}
              ref={biographyRef}
            >
              {person.biography}
            </Typography>

            {lines > 9 && (
              <div className={classes.button}>
                <Button onClick={handleClick}>
                  {checked ? "Read less" : "Read more"}
                </Button>
              </div>
            )}
          </>
        ) : (
          <Typography>
            We don't have any biography about this person.
          </Typography>
        )}
      </Box>
    </>
  );
};

export default Biography;

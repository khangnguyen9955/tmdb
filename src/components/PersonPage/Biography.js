import { Box, Typography } from "@material-ui/core";
import React from "react";

const Biography = ({ person }) => {
  return (
    <>
      <Box>
        <Box>{person.name}</Box>

        <Box>
          <Typography>Biography</Typography>
          <Typography>{person.biography}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Biography;

import { Box } from "@material-ui/core";
import { CircularProgress } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Box
      display="flex"
      height="90vh"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />
    </Box>
  );
};

export default Loading;

import React from "react";
import { Box, Button, CircularProgress } from "@material-ui/core";

const LoadMore = ({ loading, handleClick }) => {
  return loading ? (
    <Box display="flex" justifyContent="center">
      <CircularProgress />
    </Box>
  ) : (
    <Button
      variant="contained"
      color="primary"
      size="large"
      fullWidth
      onClick={handleClick}
      style={{
        overflowAnchor: "none",
        backgroundColor: "rgba(16,79,115,0.94)",
        fontWeight: 600,
        textTransform: "none",
      }}
    >
      Load More
    </Button>
  );
};

export default LoadMore;

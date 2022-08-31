import { Table, TableBody, TableContainer, Typography } from "@mui/material";
import { Paper } from "@material-ui/core";
import React from "react";
import Row from "./Row";

const CreditTable = ({ department, credits }) => {
  return (
    <div>
      <Typography
        variant="subtitle1"
        gutterBottom
        style={{ textTransform: "capitalize" }}
        sx={{ fontWeight: 600, fontSize: "1.3em" }}
      >
        {department}
      </Typography>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableBody>
            {[...credits]
              .sort((a, b) =>
                !a.release_date
                  ? -1
                  : new Date(b.release_date) - new Date(a.release_date)
              )
              .map((credit, index) => (
                <Row key={credit.credit_id + index} row={credit} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CreditTable;

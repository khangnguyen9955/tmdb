import { Table, TableBody, TableContainer, Typography } from "@mui/material";
import React from "react";
import Row from "./Row";

const CreditTable = ({ department, credits }) => {
  return (
    <div>
      <Typography>{department}</Typography>
      <TableContainer>
        <Table>
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

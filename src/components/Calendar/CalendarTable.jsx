import React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CircularProgress from "@mui/material/CircularProgress";
import RowManager from "./RowManager";

function CalendarGrid({ month, year, events }) {
  return (
    <TableContainer sx={{ width: "100%", height: "100%", overflow: "clip" }}>
      <Table
        sx={{
          width: "100%",
          height: "98%",
          tableLayout: "fixed",
          lineHeight: "20px",
        }}
        size="small"
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ textAlign: "center" }}>Lundi</TableCell>
            <TableCell sx={{ textAlign: "center" }}>Mardi</TableCell>
            <TableCell sx={{ textAlign: "center" }}>Mercredi</TableCell>
            <TableCell sx={{ textAlign: "center" }}>Jeudi</TableCell>
            <TableCell sx={{ textAlign: "center" }}>Vendredi</TableCell>
            <TableCell sx={{ textAlign: "center" }}>Samedi</TableCell>
            <TableCell sx={{ textAlign: "center" }}>Dimanche</TableCell>
          </TableRow>
        </TableHead>
        <RowManager month={month} year={year} events={events} />
      </Table>
    </TableContainer>
  );
}

CalendarGrid.propTypes = {};

CalendarGrid.defaultProps = {};

export default CalendarGrid;

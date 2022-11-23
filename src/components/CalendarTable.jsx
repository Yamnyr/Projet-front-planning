import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function CalendarGrid() {
    return (
        <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Lundi</TableCell>
                        <TableCell>Mardi</TableCell>
                        <TableCell>Mercredi</TableCell>
                        <TableCell>Jeudi</TableCell>
                        <TableCell >Vendredi</TableCell>
                        <TableCell >Samedi</TableCell>
                        <TableCell >Dimanche</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* Insérer map de table cell*/}
                    <TableCell></TableCell>
                    <TableCell>rtrhhrhthtrhrthrth</TableCell>
                    <TableCell> fgf </TableCell>
                    <TableCell></TableCell>
                    <TableCell ></TableCell>
                    <TableCell >dff</TableCell>
                    <TableCell >rtgrt</TableCell>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

CalendarGrid.propTypes = {
};

CalendarGrid.defaultProps = {
};

export default CalendarGrid;
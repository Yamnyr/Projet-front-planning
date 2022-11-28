import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EventManager from "./EventManager";

function CalendarGrid() {
    console.log(new Date())
    return (
        <TableContainer sx={{ width: "100%", height: "100%"}}>
            <Table sx={{ width: "100%",height: "100%", tableLayout:"fixed", lineHeight:"20px" }} size="small" aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{textAlign:"center"}}>Lundi</TableCell>
                        <TableCell sx={{textAlign:"center"}}>Mardi</TableCell>
                        <TableCell sx={{textAlign:"center"}}>Mercredi</TableCell>
                        <TableCell sx={{textAlign:"center"}}>Jeudi</TableCell>
                        <TableCell sx={{textAlign:"center"}}>Vendredi</TableCell>
                        <TableCell sx={{textAlign:"center"}}>Samedi</TableCell>
                        <TableCell sx={{textAlign:"center"}}>Dimanche</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody sx={{height: "95%"}}>
                    <TableRow>
                        <TableCell><EventManager /></TableCell>
                        <TableCell><EventManager /></TableCell>
                        <TableCell>  </TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell><EventManager /></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell><EventManager /></TableCell>
                        <TableCell></TableCell>
                        <TableCell><EventManager /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><EventManager /></TableCell>
                        <TableCell><EventManager /></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell><EventManager /></TableCell>
                        <TableCell><EventManager /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell><EventManager /></TableCell>
                        <TableCell><EventManager /></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><EventManager /></TableCell>
                        <TableCell><EventManager /></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell><EventManager /></TableCell>
                        <TableCell><EventManager /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><EventManager /></TableCell>
                        <TableCell><EventManager /></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell><EventManager /></TableCell>
                        <TableCell><EventManager /></TableCell>
                    </TableRow>
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
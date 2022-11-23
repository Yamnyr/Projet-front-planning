import React from "react";
import Box from '@mui/material/Box';
import {DataGrid} from "@mui/x-data-grid";


const columns = [
    { field: 'lundi', flex: 1},
    { field: 'mardi', flex: 1},
    { field: 'mercredi', flex: 1},
    { field: 'jeudi', flex: 1},
    { field: 'vendredi', flex: 1 },
    { field: 'samedi', flex: 1},
    { field: 'dimanche', flex: 1},
];

const rows = [
    { id: 1, lundi: 'rtr', mardi: 'ededeed', mercredi: '', jeudi:'jftu,jtui,k', vendredi: 'yjjyj', samedi:'', dimanche:'hyhy' },
    { id: 2, lundi: 'rgrggrg'},
    { id: 3, mercredi: 'irbfurevrvr'},
    { id: 4, vendredi: '' },
    { id: 5, vendredi: 'rtr' },
];

function CalendarGrid() {
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid hideFooter={true} rows={rows} columns={columns} />
        </Box>
    );
}

CalendarGrid.propTypes = {
};

CalendarGrid.defaultProps = {
};

export default CalendarGrid;
import React from "react";
import PropTypes from 'prop-types';
import TableRow from '@mui/material/TableBody';
import TableCell from '@mui/material/TableBody';
import EventManager from "./EventManager";

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];


function RowMaker({start, month, events}) {
    let Row = events.map(eventDay =>
        <TableCell>
            <EventManager month={monthNames[month]} />
        </TableCell>
    )
    return (
        <TableRow>
            {Row}
        </TableRow>
    );
}

RowMaker.propTypes = {
    month: PropTypes.number,
    start: PropTypes.number,
};

RowMaker.defaultProps = {
    month : null,
    start: 0,
};

export default RowMaker;
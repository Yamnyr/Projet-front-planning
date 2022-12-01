import React from "react";
import PropTypes from 'prop-types';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import EventManager from "./EventManager";

const monthNames = ["Jan.", "Fev.", "Mar.", "Avr.", "Mai", "Jui.",
    "Jui.", "Aou.", "Sep.", "Oct.", "Nov.", "Dec."
];


function RowMaker({start, month, events, day}) {
    let Row = [];
    // for (let i=0; i<start;i++){
    //     Row.push(<TableCell></TableCell>)
    // }
    // for (let i=0; i<events.length;i++){
    for (let i=0; i<7;i++){
        Row.push(<TableCell>
            <EventManager month={monthNames[month]} day={day+i}/>
        </TableCell>);
    }
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
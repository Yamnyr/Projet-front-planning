import React from "react";
import PropTypes from 'prop-types';
import TableRow from '@mui/material/TableBody';

function RowMaker({day, start, month, events}) {
    let Row = events.map(eventDay => {

    })
    return (
        <TableRow>
        </TableRow>
    );
}

RowMaker.propTypes = {
    day: PropTypes.number,
    start: PropTypes.number,
};

RowMaker.defaultProps = {
    day : null,
    start: 0,
};

export default RowMaker;
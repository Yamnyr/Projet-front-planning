import React from "react";
import PropTypes from 'prop-types';
import TableBody from '@mui/material/TableBody';
import RowMaker from "./RowMaker";

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function RowManager({month, events}) {
    let Rows = "";
    const Today = new Date();
    if (monthNames[Today.getMonth()] === month){
        let start = (Today.getDay() + Today.getDate())%7;
        let day = 1;
        day = day + 7 - start;
        Rows += `<RowMaker start={start} day={day} />`
        for(let i = 0; i < Math.floor((Today.getDay() + Today.getDate()) / 7) - 1; i++ ){
            Rows += `<RowMaker day={day} />`
            day += 7;
        }
    }
    else {

    }
    return (
        <TableBody sx={{height: "95%"}}>
            {Rows}
        </TableBody>
    );
}

RowManager.propTypes = {
    month: PropTypes.string,
};

RowManager.defaultProps = {
    month: monthNames[new Date().getMonth()],
};

export default RowManager;
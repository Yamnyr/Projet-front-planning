import React from "react";
import PropTypes from 'prop-types';
import TableBody from '@mui/material/TableBody';
import RowMaker from "./RowMaker";

function RowManager({month, year, events}) {
    const DayInMonth = new Date(month,year,0).getDate();
    const FirstDayOfTheMonth = new Date(year, month, 1).getDay();
    const FirstWeekOfMonth = FirstDayOfTheMonth%7;
    let Rows = <RowMaker start={FirstDayOfTheMonth} month={month}/> ;
    let CountDay = FirstDayOfTheMonth + FirstWeekOfMonth ;
    for (CountDay; CountDay < DayInMonth; CountDay+7){
        Rows += <RowMaker month={month}/>
    }
    return (
        <TableBody sx={{height: "95%"}}>
            {Rows}
        </TableBody>
    );
}

RowManager.propTypes = {
    month: PropTypes.number,
    year : PropTypes.number,
};

RowManager.defaultProps = {
    month: new Date().getMonth(),
    year : new Date().getFullYear(),
};

export default RowManager;
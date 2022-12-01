import React from "react";
import PropTypes from 'prop-types';
import TableBody from '@mui/material/TableBody';
import RowMaker from "./RowMaker";

function RowManager({month, year, events}) {
    const DayInMonth = new Date(month,year,0).getDate();
    const FirstDayOfTheMonth = new Date(year, month, 1).getDay();
    let Rows= [<RowMaker start={FirstDayOfTheMonth} month={month} day={1}/>] ;
    let CountDay = (FirstDayOfTheMonth-7) * -1 + 1 ;
    console.log(DayInMonth + FirstDayOfTheMonth + ((DayInMonth + FirstDayOfTheMonth)%7))
    for (let i = CountDay; i < (DayInMonth + FirstDayOfTheMonth); i+= 7){
        Rows.push(<RowMaker month={month} start={i} day={i}/>);
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
    events: PropTypes.array,
};

RowManager.defaultProps = {
    month: new Date().getMonth(),
    year : new Date().getFullYear(),
    events : null,
};

export default RowManager;
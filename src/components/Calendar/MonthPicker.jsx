import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import useCalendar from "../../hooks/UseCalendar";

function MonthPicker({ month, year, updateDate }) {
  const [value, setValue] = React.useState(dayjs(`${year}-${month}-04`));
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
      <DatePicker
        views={["year", "month"]}
        label="Changer la date"
        minDate={dayjs(`${year - 1}-${month}-04`)}
        maxDate={dayjs(`${year + 1}-${month}-04`)}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          updateDate(newValue);
        }}
        renderInput={(params) => <TextField {...params} helperText={null} />}
      />
    </LocalizationProvider>
  );
}
export default MonthPicker;

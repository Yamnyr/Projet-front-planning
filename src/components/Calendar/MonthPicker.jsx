import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// eslint-disable-next-line import/no-extraneous-dependencies
import dayjs from "dayjs";
import "dayjs/locale/fr";
import TextField from "@mui/material/TextField";
// eslint-disable-next-line import/no-extraneous-dependencies
import { LocalizationProvider } from "@mui/x-date-pickers";
// eslint-disable-next-line import/no-extraneous-dependencies
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import useCalendar from "../../hooks/UseCalendar";

function MonthPicker() {
  const { month, year, updateDate } = useCalendar();
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
          console.log(month);
        }}
        renderInput={(params) => <TextField {...params} helperText={null} />}
      />
    </LocalizationProvider>
  );
}
export default MonthPicker;

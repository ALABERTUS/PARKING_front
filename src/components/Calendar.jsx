import React, { useState, useEffect } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import './Calendar.css'

const Calendar = ({setNewDate}) => {

    const [calendarValue, setCalendarValue] = useState()

    const onDateChange = (newDate) => {
      setNewDate(newDate)
    }

    return (
    <div className="calendar">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar 
          showDaysOutsideCurrentMonth 
          fixedWeekNumber={6}
          onChange={onDateChange} 
          value={calendarValue}
          />
      </LocalizationProvider>
    </div>
    )
}

export default Calendar
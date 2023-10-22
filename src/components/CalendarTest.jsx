import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
//import './Calendar.css'
import {useState} from 'react'
import './CalendarTest.css'

const CalendarTest = ({}) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    
    const handleDateChange = (date) => {
        setSelectedDate(date);
        setShowPopup(true);
    }

    return (
        <div className="calendar">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
                    showDaysOutsideCurrentMonth
                    fixedWeekNumber={6}
                    value={selectedDate}
                    onChange={handleDateChange}
                />
            </LocalizationProvider>
            {showPopup && (
                <div className="popup-test">
                    <button>Submit</button><button onClick={() => setShowPopup(false)}>Close</button>
                    <p>You selected {selectedDate?.toString()}</p>
               
                </div>
            )}
        </div>
      
      )
  }
export default CalendarTest;
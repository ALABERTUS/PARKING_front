import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useNavigate } from 'react-router-dom';
import './Calendar.css';

const Calendar = ({ onDateSelect }) => {
    const navigate = useNavigate();

    const handleDayClick = (date) => {
        const selectedDate = date.format("YYYY-MM-DD");
        navigate(`/reservadetails/${selectedDate}`);

        if (onDateSelect) {
            onDateSelect(date);
        }
    };
    
    return (
        <div className="calendar">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                    showDaysOutsideCurrentMonth
                    fixedWeekNumber={6}
                    onChange={handleDayClick}
                />
            </LocalizationProvider>
        </div>
    );
}
export default Calendar;
/*import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useNavigate } from 'react-router-dom';
import './Calendar.css';
import Popup from '../components/Popup';

const Calendar = ({ onDateSelect }) => {
    const navigate = useNavigate();

    const handleDayClick = (date) => {
        const selectedDate = date.format("YYYY-MM-DD");
        navigate(`/reservedetails/${selectedDate}`);

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
*/

import * as React from 'react';
import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useNavigate } from 'react-router-dom';
import './Calendar.css';
import Popup from '../components/Popup';

const Calendar = ({ onDateSelect, role }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const navigate = useNavigate();

    const handleDayClick = (date) => {
        setSelectedDate(date);
        if (onDateSelect) {
            onDateSelect(date);
        }
    };

    const handlePopupSubmit = () => {
        const formattedDate = selectedDate.format("YYYY-MM-DD");
        navigate(`/reservedetails/${formattedDate}`, { state: { role } });
        setSelectedDate(null);
    };

    const handlePopupClose = () => {
        setSelectedDate(null);
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
            {selectedDate && (
                <Popup 
                    date={selectedDate.format("YYYY-MM-DD")} 
                    role={role}
                    onClose={handlePopupClose}
                    onSubmit={handlePopupSubmit}
                />
            )}
        </div>
    );
}

export default Calendar;

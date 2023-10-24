
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import './Calendar.css'

const Calendar = () => {
    return (
    <div className="calendar">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={6} />
      </LocalizationProvider>
    </div>
    
    )
}

export default Calendar
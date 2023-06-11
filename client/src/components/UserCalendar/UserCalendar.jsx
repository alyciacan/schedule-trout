import { useState } from 'react'
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

const UserCalendar = () => {
  const [events, setEvents] = useState([]);
  return (
    <div>
      <Calendar 
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{height:500}}
      />
    </div>
  )
}

export default UserCalendar
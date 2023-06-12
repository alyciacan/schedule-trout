import { useState } from 'react'
import {Calendar, dayjsLocalizer} from 'react-big-calendar'
import dayjs from 'dayjs'

const localizer = dayjsLocalizer(dayjs)

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
import {useState, useEffect} from 'react'
import { getAvailableSlots, deleteAvailableSlot } from '../../../utils/resource'
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'
import { formatEvents } from '../../../utils/calendarResources'

const localizer = dayjsLocalizer(dayjs)

const AvailabilityCalendar = ({ formSubmitted, handleUpdate }) => {
  const [availabilityWindows, setAvailabilityWindows] = useState([])
  const [selectedAppointment, setSelectedAppointment] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getAvailableSlots()
        setAvailabilityWindows(data)
      } catch (error) {
        console.error(error)
      }
    }

    getData()
  }, [formSubmitted])

  const handleSelectAppointment = (appointment) => {
    setSelectedAppointment(appointment)
  }

  const handleBook = (id) => {

  }

  const handleDelete = (id) => {
    deleteAvailableSlot(id)
    setSelectedAppointment(null)
    handleUpdate()
  }

  // const handleRangeChange = (args) => {
  //   console.log(args)
  // }
console.log(availabilityWindows)
  return (
    <div>
      <h1>All Coach Availability</h1>
      <Calendar 
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{height:500}}
        events={formatEvents(availabilityWindows)}
        onSelectEvent={handleSelectAppointment}
        // onRangeChange={handleRangeChange}
      />
      {selectedAppointment && (
        <div>
          <h3>{selectedAppointment.title}</h3>
          {!localStorage.getItem('coach') ? <button type="button" onClick={() => handleBook(selectedAppointment.id)}>Book this slot</button> : <button type="button" onClick={() => handleDelete(selectedAppointment.id)}>Delete this slot</button>}
        </div>
      )}
    </div>
  )
}

export default AvailabilityCalendar
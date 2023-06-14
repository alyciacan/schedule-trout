import React from 'react'
import AvailabilityCalendar from '../AvailabilityCalendar/AvailabilityCalendar'

const StudentView = ({handleUpdate}) => {
  return (
    <div>
      <h1>Book Coach Appointment</h1>
      <AvailabilityCalendar handleUpdate={handleUpdate}/>
    </div>
  )
}

export default StudentView
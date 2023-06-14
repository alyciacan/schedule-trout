import {useState} from 'react'
import AvailabilityCalendar from '../AvailabilityCalendar/AvailabilityCalendar'
import AvailabilitySetter from '../AvailabilitySetter/AvailabilitySetter'

const CoachAvailabilityView = () => {

  return (
    <div>
      <AvailabilitySetter />
      <AvailabilityCalendar />
    </div>
  )
}

export default CoachAvailabilityView
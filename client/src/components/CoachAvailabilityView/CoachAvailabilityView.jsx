import {useState} from 'react'
import AvailabilityCalendar from '../AvailabilityCalendar/AvailabilityCalendar'
import AvailabilitySetter from '../AvailabilitySetter/AvailabilitySetter'

const CoachAvailabilityView = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleUpdate = () => {
    if(formSubmitted) setFormSubmitted(false)
    if(!formSubmitted) setFormSubmitted(true)
  }

  return (
    <div>
      <AvailabilitySetter handleFormSubmit={handleUpdate}/>
      <AvailabilityCalendar formSubmitted={formSubmitted} handleUpdate={handleUpdate}/>
    </div>
  )
}

export default CoachAvailabilityView
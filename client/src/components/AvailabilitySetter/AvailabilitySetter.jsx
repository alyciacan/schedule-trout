import { useState } from 'react'
import dayjs from 'dayjs'
import { createAvailableSlot } from '../../../utils/resource'

const AvailabilitySetter = ({ handleFormSubmit }) => {
  const [inputStartTime, setInputStartTime] = useState('')
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    console.log('change made!')
    setInputStartTime(dayjs(e.target.value))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const slot = {
      startTime: inputStartTime.toDate(),
      endTime: inputStartTime.add(2, 'hour').toDate(),
      coachId: localStorage.getItem("_id"),
      coachName: localStorage.getItem("name")
    }
    const res = await createAvailableSlot(slot)
    setMessage(res)
    handleFormSubmit()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="startTime"></label>
        <input type="datetime-local" id="startTime" onChange={handleChange}/>
        <button>Add Appointment Slot</button>
      </form>
      <h2>{message}</h2>
    </div>
  )
}

export default AvailabilitySetter
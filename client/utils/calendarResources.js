import dayjs from "dayjs";


export const formatEvents = (eventsArray) => {
  return eventsArray.map(eventObj => ({
    title: eventObj.appointmentId ? `Appointment Not Available` : `Available: Meeting with ${eventObj.coachName}`,
    start: eventObj.startTime,
    end: eventObj.endTime,
    id: eventObj._id
  }))
}

export const formatAppointments = (eventsArray) => {
  return eventsArray.map(eventObj => ({
    title: `Meeting with coach at ${dayjs(eventObj.startTime).format('h:mm A [on] MMMM D, YYYY')}`,
    start: eventObj.startTime,
    end: eventObj.endTime,
    id: eventObj._id
  }))
}
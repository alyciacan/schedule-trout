export const formatEvents = (eventsArray) => {
  return eventsArray.map(eventObj => ({
    title: `Available: Meeting with ${eventObj.coachName}`,
    start: eventObj.startTime,
    end: eventObj.endTime,
    id: eventObj._id
  }))
}
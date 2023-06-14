import { useState, useEffect } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import { formatAppointments } from "../../../utils/calendarResources";
import { getStudentAppointments } from "../../../utils/resource";
import EventBus from "../../../utils/EventBus";

const localizer = dayjsLocalizer(dayjs);

const UserCalendar = () => {
  const [events, setEvents] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const appts = await getStudentAppointments(localStorage.getItem("_id"));
    setEvents(appts);
  };

  useEffect(() => {
    const handleUpdate = () => {
      getData();
    };

    EventBus.on("updateUserCalendar", handleUpdate);

    return () => {
      EventBus.remove("updateUserCalendar", handleUpdate);
    };
  }, []);

  const handleSelectAppointment = (appointment) => {
    setSelectedAppointment(appointment);
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        events={formatAppointments(events)}
        onSelectEvent={handleSelectAppointment}
      />
      {selectedAppointment && (
        <div>
          <h3>{selectedAppointment.title}</h3>
        </div>
      )}
    </div>
  );
};

export default UserCalendar;

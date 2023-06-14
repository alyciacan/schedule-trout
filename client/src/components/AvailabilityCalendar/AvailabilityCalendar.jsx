import { useState, useEffect } from "react";
import {
  getAvailableSlots,
  deleteAvailableSlot,
  bookAppointment,
} from "../../../utils/resource";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import { formatEvents } from "../../../utils/calendarResources";
import EventBus from "../../../utils/EventBus";

const localizer = dayjsLocalizer(dayjs);

const AvailabilityCalendar = () => {
  const [availabilityWindows, setAvailabilityWindows] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const getData = async () => {
    try {
      const data = await getAvailableSlots();
      setAvailabilityWindows(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const handleUpdate = () => {
      getData()
    }

    EventBus.on("updateAvailabilityCalendar", handleUpdate);

    return () => {
      EventBus.remove("updateAvailabilityCalendar", handleUpdate);
    };
  }, []);

  const handleSelectAppointment = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const handleBook = async (appointment) => {
    try {
      const res = await bookAppointment({
        studentName: localStorage.getItem("name"),
        availabilityWindowId: appointment.id,
        startTime: appointment.start,
        endTime: appointment.end,
        studentId: localStorage.getItem("_id"),
      });
      console.log(res)
      if (res.ok) {
        EventBus.dispatch("updateUserCalendar", '');
        EventBus.dispatch("updateAvailabilityCalendar", '')
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = (id) => {
    deleteAvailableSlot(id);
    setSelectedAppointment(null);
  };

  console.log(availabilityWindows);
  return (
    <div>
      <h1>All Coach Availability:</h1>
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        events={formatEvents(availabilityWindows)}
        onSelectEvent={handleSelectAppointment}
        // onRangeChange={handleRangeChange}
      />
      {selectedAppointment && (
        <div>
          <h3>{selectedAppointment.title}</h3>
          {localStorage.getItem("coach") === "true" && (
            <button
              type="button"
              onClick={() => handleDelete(selectedAppointment)}
            >
              Delete this slot
            </button>
          )}
          {localStorage.getItem("coach") === "false" &&
            !selectedAppointment.title.includes("Not") && (
              <button
                type="button"
                onClick={() => handleBook(selectedAppointment)}
              >
                Book this slot
              </button>
            )}
        </div>
      )}
    </div>
  );
};

export default AvailabilityCalendar;

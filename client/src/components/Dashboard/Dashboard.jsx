import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookAppointment from "../BookAppointment/BookAppointment";
import AvailabilitySetter from "../AvailabilitySetter/AvailabilitySetter";
import Calendar from "../UserCalendar/UserCalendar";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("_id")) {
      navigate("/");
    }
    if (localStorage.getItem("coach")) {
      setUserType("coach");
    }
  }, [navigate]);

  return (
    <div>
      {userType === "coach" ? <AvailabilitySetter /> : <BookAppointment />}
      <Calendar />
    </div>
  );
};

export default Dashboard;

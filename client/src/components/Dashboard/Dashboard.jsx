import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentView from "../StudentView/StudentView";
import AvailabilitySetter from "../AvailabilitySetter/AvailabilitySetter";
import Calendar from "../UserCalendar/UserCalendar";
import CoachAvailabilityView from "../CoachAvailabilityView/CoachAvailabilityView";
import UserCalendar from "../UserCalendar/UserCalendar";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false)


  useEffect(() => {
    if (!localStorage.getItem("_id")) {
      navigate("/");
    }
    if (localStorage.getItem("coach") === 'true') {
      setUserType("coach")
    } else {
      setUserType("student")
    }
  }, []);

  const handleUpdate = () => {
    if(formSubmitted) setFormSubmitted(false)
    if(!formSubmitted) setFormSubmitted(true)
  }
console.log(formSubmitted)
  return (
    <div>
      {userType === "coach" ? <CoachAvailabilityView /> : <StudentView handleUpdate={handleUpdate}/>}
      <h2>My Schedule:</h2>
      <UserCalendar />
    </div>
  );
};

export default Dashboard;

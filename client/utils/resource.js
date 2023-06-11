export const handleRegister = async (email, username, password, navigate) => {};

export const handleLogin = async (email, password, navigate) => {
  try {
    const res = await fetch('http://localhost:5000/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json();

    if(res.ok) {
      localStorage.setItem('token', data.token)
      localStorage.setItem('_id', data._id)
      localStorage.setItem('email', data.email)
      localStorage.setItem('name', data.name)
      localStorage.setItem('coach', data.coach)
      navigate('/dashboard')
    } else {
      throw new Error(data.message)
    }
  } catch (error) {
    console.error(error)
  }
};

export const getAppointmentInfo = (user, setError, setSchedules) => {};

export const getAvailableSlots = () => {}

export const createAvailableSlot = (availableSlot) => {}

export const deleteAvailableSlot = (availabilityWindowId) => {}

export const bookAppointment = (
  coachId,
  studentName,
  availabilityWindowId,
  startTime,
  endTime
) => {};

export const cancelAppointment = (appointmentId) => {};

export const updateAppointment = (appointmentId, appointmentDetails) => {};

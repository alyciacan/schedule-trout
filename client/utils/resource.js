export const handleRegister = async ({ email, name, password, coach }) => {
  try {
    const res = await fetch("http://localhost:5000/api/users/", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        coach: coach,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("_id", data._id);
      localStorage.setItem("email", data.email);
      localStorage.setItem("name", data.name);
      localStorage.setItem("coach", data.coach);
      return res;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error(error);
  }
};

export const handleLogin = async (email, password, navigate) => {
  try {
    const res = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("_id", data._id);
      localStorage.setItem("email", data.email);
      localStorage.setItem("name", data.name);
      localStorage.setItem("coach", data.coach);
      navigate("/dashboard");
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error(error);
  }
};

export const getAvailableSlots = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/availabilitywindows", {
      method: "GET",
    });
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      throw new Error(res.message);
    }
  } catch (error) {
    console.error(error);
  }
};

export const createAvailableSlot = async (slot) => {
  try {
    const res = await fetch("http://localhost:5000/api/availabilitywindows", {
      method: "POST",
      body: JSON.stringify(slot),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    if (res.ok) {
      return res;
    } else {
      throw new Error(res.message);
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteAvailableSlot = async (availabilityWindowId) => {
  try {
    const res = await fetch(
      `http://localhost:5000/api/availabilitywindows/${availabilityWindowId}`,
      {
        method: "DELETE",
      }
    );
    const data = await res.json();

    if (res.ok) {
      return "Successfully deleted availability slot!";
    } else {
      throw new Error(res.message);
    }
  } catch (error) {
    console.error(error);
  }
};

export const bookAppointment = async ({
  coachId,
  studentName,
  availabilityWindowId,
  startTime,
  endTime,
  studentId,
}) => {
  const res = await fetch(`http://localhost:5000/api/appointments`, {
    method: "POST",
    body: JSON.stringify({
      coachId,
      studentName,
      availabilityWindowId,
      startTime,
      endTime,
      studentId,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (res.ok) {
    return res;
  } else {
    throw new Error(res.message);
  }
};
export const cancelAppointment = (appointmentId) => {};

export const updateAppointment = (appointmentId, appointmentDetails) => {};

export const getStudentAppointments = async (studentId) => {
  const res = await fetch(
    `http://localhost:5000/api/appointments/${studentId}`
  );
  if (res.ok) {
    return res.json();
  } else {
    return res.message;
  }
};

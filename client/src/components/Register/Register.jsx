import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { handleRegister } from "../../../utils/resource";

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const [role, setRole] = useState("")
  const navigate = useNavigate('/dashboard')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await handleRegister({
      email: email,
      password: password,
      name: name,
      coach: role === 'coach'
    })
    if(res.ok) {
      navigate('/dashboard')
    }
  }

  return (
    <form>
      <h2>Register</h2>
      <label htmlFor="email">Name:</label>
      <input
        id="name"
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="email"
      />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="email"
      />
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="password"
      />
      <label htmlFor="password">Confirm Password:</label>
      <input
        id="password2"
        type="password"
        name="password2"
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
        className="password"
      />
      <label>I am a:</label>
      <label>
        <input
          type="radio"
          name="role"
          value="coach"
          checked={role === 'coach'}
          onChange={(e) => setRole(e.target.value)}
        />
        Coach
      </label>
      <label>
        <input
          type="radio"
          name="role"
          value="student"
          checked={role === 'student'}
          onChange={(e) => setRole(e.target.value)}
        />
        Student
      </label>
      <button type="submit" onClick={handleSubmit}>Register</button>
    </form>
  );
};

export default Register;

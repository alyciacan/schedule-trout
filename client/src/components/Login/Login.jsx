import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { handleLogin } from "../../../utils/resource";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() && password.trim()) {
      handleLogin(email, password, navigate)
      setPassword("");
      setEmail("");
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="email"
        />
        <label htmlFor="password">Password</label>
        <input 
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="password"
        />
        <button className="loginButton">LOG IN</button>
        <p>New user?
          <Link className='link' to='/register'>
            Register!
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Login;

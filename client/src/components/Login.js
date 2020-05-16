import React, { useState } from "react";
import { axiosWithAuth } from "../axiosWithAuth";

const Login = (props) => {
  const [credentials, setCredentials] = useState({});

  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected"); //redirect to protected after successful log in
      });
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>

      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;

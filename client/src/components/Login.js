import React, { useState } from "react";
import { axiosWithAuth } from '../axiosWithAuth';


const Login = (props) => {
  const [credentials, setCredentials] = useState({})
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const login = e => {
    e.preventDefault();
    axiosWithAuth().post("/login", credentials)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      props.history.push('/protected');
    })
  }



  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
    </>
  );
};

export default Login;

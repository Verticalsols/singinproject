import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [userInput, setUserInput] = React.useState({
    fullName: "",
    userName: "",
    userEmail: "",
    password: "",
  });

  const navigate = useNavigate();
  const registerUser = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3003/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // this is from db
        userEmail: userInput.userEmail,
        password: userInput.password,
      }),
    });

    const json = await response.json();
    console.log(json);
    if (json.success) {
      navigate("/welcome");
    }
  };
  const onHandle = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={registerUser}>
      <h3>Sign In</h3>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          name="userEmail"
          value={userInput.userEmail}
          onChange={onHandle}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          name="password"
          value={userInput.password}
          onChange={onHandle}
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/sign-in">sign in?</a>
      </p>
    </form>
  );
};

export default SignUp;

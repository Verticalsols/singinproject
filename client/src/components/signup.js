import React, { useState } from "react";

const SignUp = () => {
  const [userInput, setUserInput] = React.useState({
    fullName: "",
    userName: "",
    userEmail: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3003/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: userInput.fullName, // this is from db
        userName: userInput.userName,
        userEmail: userInput.userEmail,
        password: userInput.password,
      }),
    });

    const json = await response.json();
    console.log(json);
  };
  const onHandle = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={registerUser}>
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>Full Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Full name"
          name="fullName"
          value={userInput.fullName}
          onChange={onHandle}
        />
      </div>
      <div className="mb-3">
        <label>User name</label>
        <input
          type="text"
          className="form-control"
          placeholder="User name"
          name="userName"
          value={userInput.userName}
          onChange={onHandle}
        />
      </div>
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

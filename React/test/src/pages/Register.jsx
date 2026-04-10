import React from "react";
import { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div id="outer">
      <h1>Register</h1>
      <form action="#" onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setName(e.target.value);
            console.log(name);
          }}
          type="text"
          placeholder="Username"
          value={name}
        />
        <input
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(email);
          }}
          type="email"
          placeholder="Email"
          value={email}
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
            console.log(password);
          }}    
          type="password"
          placeholder="Password"
          value={password}
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;

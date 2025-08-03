import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"; // Assuming you have a styles.css for basic styling

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }
    if (!password) {
      alert("Please enter your password");
      return;
    }
    // For now, no actual password validation — just passing both to dashboard
    navigate("/dashboard", { state: { name, password } });
  }

  return (
    <div className="container">
      <h1>Intern Portal Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter Your Name</label>
        <input
          id="name"
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus
        />

        <label htmlFor="password">Enter Password</label>
        <input
          id="password"
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

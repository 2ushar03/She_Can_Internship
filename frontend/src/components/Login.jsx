import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }
    navigate("/dashboard", { state: { name } });
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

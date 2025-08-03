import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Leaderboard() {
  const [interns, setInterns] = useState([]);

  useEffect(() => {
  fetch(`${import.meta.env.VITE_API_BASE}/api/interns`)
    .then((res) => res.json())
    .then((data) =>
      // Sort descending by donations
      setInterns(data.sort((a, b) => b.donations - a.donations))
    )
    .catch(() => alert("Error fetching leaderboard data"));
}, []);

  return (
    <div className="container">
      <h1>Leaderboard</h1>
      <ol className="leaderboard-list">
        {interns.map((intern, index) => (
          <li key={intern.id || intern.name}>
            <span>
              #{index + 1} {intern.name}
            </span>
            <span>${intern.donations}</span>
          </li>
        ))}
      </ol>

      <Link to="/" className="link-button">
        Back to Login
      </Link>
    </div>
  );
}
import "./styles.css"; // Assuming you have a styles.css for basic styling

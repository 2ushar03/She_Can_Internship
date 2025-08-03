// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate, Link } from "react-router-dom";

// export default function Dashboard() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [interns, setInterns] = useState([]);
//   const userName = location.state?.name;

//   useEffect(() => {
//     if (!userName) {
//       navigate("/");
//       return;
//     }
//     fetch(`${import.meta.env.VITE_API_BASE}/api/interns`)
//       .then((res) => res.json())
//       .then(setInterns)
//       .catch(() => alert("Error fetching intern data"));
//   }, [userName, navigate]);

//   const user = interns.find(
//     (intern) => intern.name.toLowerCase() === userName.toLowerCase()
//   );

//   if (!user) {
//     return (
//       <div className="container">
//         <h1>User not found</h1>
//         <Link to="/">Back to Login</Link>
//       </div>
//     );
//   }

//   return (
//     <div className="container">
//       <h1>Welcome, {user.name}!</h1>

//       <div className="card">
//         <h2>Your Details</h2>
//         <p>
//           <strong>Referral Code:</strong> {user.referralCode}
//         </p>
//         <p>
//           <strong>Total Donations Raised:</strong> ${user.donations}
//         </p>
//       </div>

//       <div className="card rewards">
//         <h2>Rewards & Unlockables</h2>
//         <ul>
//           <li>Completed onboarding badge</li>
//           <li>Raised $1000+ reward</li>
//           <li>Referred 3 interns</li>
//         </ul>
//       </div>

//       <Link to="/leaderboard" className="link-button">
//         View Leaderboard
//       </Link>
//     </div>
//   );
// }




import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./styles.css"; // Assuming you have a styles.css for basic styling

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const [interns, setInterns] = useState([]);
  const userName = location.state?.name;
  const [dummyPassword, setDummyPassword] = useState("");

  useEffect(() => {
    if (!userName) {
      navigate("/");
      return;
    }

    // Fetch interns data
    fetch(`${import.meta.env.VITE_API_BASE}/api/interns`)
      .then((res) => res.json())
      .then(setInterns)
      .catch(() => alert("Error fetching intern data"));

    // Generate dummy password
    const randomPassword = Math.random().toString(36).slice(-8);
    setDummyPassword(randomPassword);
  }, [userName, navigate]);

  const user = interns.find(
    (intern) => intern.name.toLowerCase() === userName.toLowerCase()
  );

  if (!user) {
    return (
      <div className="container">
        <h1>User not found</h1>
        <Link to="/">Back to Login</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Welcome, {user.name}!</h1>

      <div className="card">
        <h2>Your Details</h2>
        <p>
          <strong>Referral Code:</strong> {user.referralCode}
        </p>
        <p>
          <strong>Total Donations Raised:</strong> ${user.donations}
        </p>
        <p>
          <strong>Password:</strong> <code>{dummyPassword}</code>
        </p>
      </div>

      <div className="card rewards">
        <h2>Rewards & Unlockables</h2>
        <ul>
          <li>Completed onboarding badge</li>
          <li>Raised $1000+ reward</li>
          <li>Referred 3 interns</li>
        </ul>
      </div>

      <Link to="/leaderboard" className="link-button">
        View Leaderboard
      </Link>
    </div>
  );
}

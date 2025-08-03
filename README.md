<body>
  <h1>Intern Portal (MERN Stack)</h1>

  <p><em>This project features a fully responsive frontend design for usability across devices.</em></p>

  <h2>Overview</h2>
  <p>This project is a basic full-stack Intern Portal built using the <strong>MERN stack</strong> (MongoDB, Express.js, React, Node.js). It features a simple login page, an intern dashboard, and a leaderboard. The frontend is designed to be responsive and works well on desktops, tablets, and mobile devices.</p>

  <h2>Features</h2>
  <h3>Frontend (React)</h3>
  <ul>
    <li>Dummy Login Page (no real authentication)</li>
    <li>Dashboard showing:
      <ul>
        <li>Intern name</li>
        <li>Dummy referral code (e.g., yourname2025)</li>
        <li>Total donations raised (fetched from backend)</li>
        <li>Rewards &amp; unlockables (static list)</li>
      </ul>
    </li>
    <li>Leaderboard Page displaying interns ranked by donations (using dummy backend data)</li>
  </ul>

  <h3>Backend (Node.js + Express + MongoDB)</h3>
  <ul>
    <li>REST API endpoints returning dummy data:
      <ul>
        <li><code>/api/interns</code> - returns a list of interns with their name, referral code, and total donations.</li>
      </ul>
    </li>
    <li>Data is stored in MongoDB (can be local or hosted)</li>
    <li>API serves JSON data consumed by the React frontend.</li>
  </ul>

  <h2>Tech Stack</h2>
  <table>
    <thead>
      <tr><th>Layer</th><th>Technology</th></tr>
    </thead>
    <tbody>
      <tr><td>Frontend</td><td>React, React Router</td></tr>
      <tr><td>Backend</td><td>Node.js, Express.js</td></tr>
      <tr><td>Database</td><td>MongoDB</td></tr>
      <tr><td>Deployment Frontend</td><td>Vercel</td></tr>
      <tr><td>Deployment Backend</td><td>Render</td></tr>
    </tbody>
  </table>

  <h2>Setup and Installation</h2>

  <h3>Backend</h3>
  <pre><code>git clone https://github.com/yourusername/intern-portal.git
cd intern-portal/backend
npm install

# Create .env file with:
# MONGO_URI=your_mongodb_connection_string
# PORT=5000

npm start
# API runs at http://localhost:5000/api/interns
</code></pre>

  <h3>Frontend</h3>
  <pre><code>cd ../frontend
npm install

# Create .env file with:
# VITE_API_BASE=http://localhost:5000

npm run dev
# Frontend runs at http://localhost:3000
</code></pre>

  <h2>Deployment</h2>
  <ul>
    <li><strong>Frontend</strong> deployed on <a href="https://vercel.com" target="_blank" rel="noopener">Vercel</a>.<br />URL: <a href="https://your-frontend.vercel.app" target="_blank" rel="noopener">https://your-frontend.vercel.app</a></li>
    <li><strong>Backend</strong> deployed on <a href="https://render.com" target="_blank" rel="noopener">Render</a>.<br />URL: <a href="https://your-backend.onrender.com" target="_blank" rel="noopener">https://your-backend.onrender.com</a></li>
  </ul>
  <p>Make sure to update the frontend <code>.env</code> file to point to your Render backend URL for production.</p>

  <h2>API Endpoints</h2>
  <table>
    <thead>
      <tr><th>Endpoint</th><th>Method</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><code>/api/interns</code></td><td>GET</td><td>Returns list of interns with details</td></tr>
    </tbody>
  </table>

  <h2>Dummy Data Sample</h2>
  <pre><code>[
  {
    "name": "Eve",
    "referralCode": "eve2025",
    "donations": 1500
  },
  {
    "name": "Alice",
    "referralCode": "alice2025",
    "donations": 1200
  },
  {
    "name": "Bob",
    "referralCode": "bob2025",
    "donations": 900
  }
]
</code></pre>

  <h2>Future Improvements</h2>
  <ul>
    <li>Add real authentication and signup flow</li>
    <li>Dynamic rewards based on donations and referrals</li>
    <li>Admin dashboard for managing interns and donations</li>
    <li>Real-time leaderboard updates</li>
  </ul>

  <h2>License</h2>
  <p>This project is open-source and free to use.</p>
</body>

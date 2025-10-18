import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

// Components
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="stats">Stats</Link>
          </li>
          <li>
            <Link to="settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <Outlet /> {/* Child routes render here */}
    </div>
  );
}

function Stats() {
  return <h2>📊 Stats Page</h2>;
}

function Settings() {
  return <h2>⚙️ Settings Page</h2>;
}

function Home() {
  return (
    <div>
      <h1>🏠 Home Page</h1>
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Parent Route */}
        <Route path="/dashboard" element={<Dashboard />}>
          {/* Child Routes */}
          <Route path="stats" element={<Stats />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

import React from "react";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
    <div className="dashboard-container">
      <h2 className="dashboard-title">Welcome to your Dashboard</h2>
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>My Profile</h3>
          <p>Manage your account settings and details.</p>
        </div>
        <div className="dashboard-card">
          <h3>My Classes</h3>
          <p>View and review your classes.</p>
        </div>
        <div className="dashboard-card">
          <h3>Subscriptions</h3>
          <p>Check your subscription status.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;

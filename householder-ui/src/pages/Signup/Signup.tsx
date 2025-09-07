import React, { useState } from "react";
import "./Signup.css";

interface UserResponse {
  id: number;
  email: string;
  username: string;
}

const Signup: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("http://127.0.0.1:8000/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || "Failed to sign up");
      }

      const data: UserResponse = await response.json();
      setMessage(`Account created for ${data.username} (${data.email})`);
      setUsername("");
      setEmail("");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setMessage(`Error: ${err.message}`);
      } else {
        setMessage("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create an Account</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        {message && <p className="signup-message">{message}</p>}
      </div>
    </div>
  );
};

export default Signup;

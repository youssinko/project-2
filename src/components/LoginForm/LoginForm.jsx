import React from "react";
import "./LoginForm.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useState } from "react";
import * as usersService from "../../utilities/users-service";
// import 'index.css'

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }

  return (
    <div>
      <h3 className="login-heading mb-4">Welcome back!</h3>

      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            className="form-control"
            type="email"
            id="floatingInput"
            name="email"
            placeholder=" email@address.com"
            value={credentials.email}
            onChange={handleChange}
          />
          <label>Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter Password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <label>Password</label>
        </div>

        <span className="text-danger">{error}</span>
        <div className="d-grid">
          <button
            className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
            type="submit"
          >
            Sign in
          </button>
          <div className="text-center"></div>
        </div>
      </form>
    </div>
  );
}

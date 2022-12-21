//SIGNUPFORM.JSX
//SignUpForm.jsx <--> users-service.js <--> users-api.js <-Internet-> server.js (Express)->goes back to signupform.jsx
import { Component } from "react";
import { signUp } from "../../utilities/users-service";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };
  handleSubmit = async (evt) => {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    // alert(JSON.stringify(this.state))
    try {
      // We don't want to send the 'error' or 'confirm' property,
      //  so let's make a copy of the state object, then delete them
      const formData = { ...this.state };
      delete formData.error;
      delete formData.confirm;
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <label>Confirm</label>
          <input
            className="form-control"
            type="password"
            name="confirm"
            value={this.state.confirm}
            onChange={this.handleChange}
            required
          />
          <button
            className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
            type="submit"
            disabled={disable}
          >
            SignUp
          </button>
        </form>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}

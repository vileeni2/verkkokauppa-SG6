import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../components/Register.css';

function Register() {
  return (
    <div className="register-container">
    <h2>Register</h2>
    <form>
      <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" />
      </div>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
  )
}

export default Register;
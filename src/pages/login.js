import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../components/Login.css';
import { Link } from 'react-router-dom';

function Login() {

  return (
    <div className="containerLogin">
      <h3>Login</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input />
        </div>
        <button type="button" className="btn btn-outline-danger">
          Login
        </button>
        <Link to="/register" className="btn btn-outline-danger">
          No account yet? Register here.
        </Link>
      </form>
    </div>
  );
}


export default Login;
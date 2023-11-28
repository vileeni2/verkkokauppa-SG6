import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../components/Login.css';
import { Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tässä vaiheessa voi lisätä lomakkeen tietojen käsittelyn, esim. lähettää ne palvelimelle.
    console.log(formData);
    // Tähän voi lisätä lisälogiikkaa tai siirtyä seuraavaan näkymään.
  };

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
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>
        <button type="submit" onClick={handleSubmit} className="btn btn-outline-danger">
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
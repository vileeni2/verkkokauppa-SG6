import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../components/Register.css';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Tässä vaiheessa voi lisätä lomakkeen tietojen käsittelyn, esim. lähettää ne palvelimelle.
    try {
      const response = await axios.post('http://localhost:3001/register', formData);
      console.log(formData);

      alert('Rekisteröinti onnistui!', response.data);
    } catch (error) {
      console.error('Error registering the user', error);

      alert('Rekisteröinti epäonnistui');
    }
    // Tähän voi lisätä lisälogiikkaa tai siirtyä seuraavaan näkymään.
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>Register</button>
      </form>
    </div>
  );
}

export default Register;
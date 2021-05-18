import React, { useState } from 'react';
import './Register.scss';

const Register = () => {
  const [formData, setFormData] = useState({});

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    setFormData({
      name: '',
      email: '',
      password: '',
    });
  };
  return (
    <div className="Form">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Name"
            onChange={updateInput}
            value={formData.name || ''}
          />
          <label>Email</label>
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            onChange={updateInput}
            value={formData.email || ''}
          />
          <label>Password</label>
          <textarea
            className="input"
            type="text"
            name="password"
            onChange={updateInput}
            value={formData.password || ''}
          ></textarea>
          <div class="wrap">
            <button className="button" onClicktype="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

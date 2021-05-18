import React, { useState } from 'react';
import './Form.scss';

const Signin = () => {
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
      email: '',
      password: '',
    });
  };
  return (
    <div className="Form">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            onChange={updateInput}
            value={formData.email || ''}
          />
          <input
            className="input"
            type="text"
            name="password"
            placeholder="Password"
            onChange={updateInput}
            value={formData.password || ''}
          />
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

export default Signin;

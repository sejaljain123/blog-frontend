import React from 'react';
import { useState } from 'react';
import './Register.scss';
const Register = ({ OnRouteChange }) => {
  const [name, setName] = useState(null);
  const [regEmail, setRegEmail] = useState(null);
  const [regPassword, setRegPassword] = useState(null);
  const [state, setState] = useState([]);
  const updateName = (e) => {
    setName(e.target.value);
  };
  const updateEmail = (e) => {
    setRegEmail(e.target.value);
  };
  const updatePassword = (e) => {
    setRegPassword(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http"//localhost:5000/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        email: regEmail,
        password: regPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => setState(user));
    OnRouteChange('home');
  };
  return (
    <div className="Home2">
      <div className="text">
        <h2 className="welcome">Welcome</h2>
      </div>
      <div className="main">
        <div className="form">
          <h1>CREATE ACCOUNT</h1>
          <div className="Form">
            <div className="container">
              <form onSubmit={handleSubmit}>
                <input
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={updateName}
                />

                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={updateEmail}
                />

                <input
                  className="input"
                  type="text"
                  name="password"
                  placeholder="Password"
                  onChange={updatePassword}
                />
                <div class="wrap">
                  <button className="button" onClicktype="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

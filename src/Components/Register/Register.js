import React from 'react';
import { useState } from 'react';
import './Register.scss';
import { registerApi } from '../../api';
import { Link, useHistory } from 'react-router-dom';
const Register = () => {
  const [regName, setName] = useState(null);
  const [regEmail, setRegEmail] = useState(null);
  const [regPassword, setRegPassword] = useState(null);
  const [state, setState] = useState([]);
  const history = useHistory();
  const updateName = (e) => {
    setName(e.target.value);
  };
  const updateEmail = (e) => {
    setRegEmail(e.target.value);
  };
  const updatePassword = (e) => {
    setRegPassword(e.target.value);
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    history.push('/signin');
    const data = await registerApi(regName, regEmail, regPassword);
    const register = await data.json();
    setState(register.user);
    console.log(register);
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
              <form onSubmit={handleRegister}>
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
                <div className="wrap">
                  <button className="button" type="submit">
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

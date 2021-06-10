import React from 'react';
import { useState } from 'react';
import './Register.scss';
import { registerApi } from '../../api';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
  const [regName, setName] = useState(null);
  const [regEmail, setRegEmail] = useState(null);
  const [regPassword, setRegPassword] = useState(null);
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
    if (!regName || !regEmail || !regPassword) {
      toast.dark('Input Fields cannot be empty');
      history.push('/register');
    } else {
      e.preventDefault();
      history.push('/signin');
      await registerApi(regName, regEmail, regPassword);
    }
  };

  return (
    <>
      <Header />
      <div className="Home2">
        <div className="text">
          <h2 className="welcome">Welcome</h2>
        </div>
        <div className="main">
          <div className="form">
            <h1 className="create">CREATE ACCOUNT</h1>
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
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={updatePassword}
                  />
                  <div className="wrap">
                    <button className="button" type="submit">
                      Submit
                    </button>
                    <ToastContainer />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

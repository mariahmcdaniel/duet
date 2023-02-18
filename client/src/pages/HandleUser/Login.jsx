import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
      window.location.replace('/feed')
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: '',
      password: '',
    });
  };

  const renderForm = () => {
    if (data) {
      return (
        <p>
          Success! You may now head{' '}
          <Link to="/">back to the homepage.</Link>
        </p>
      )
    }
    return (
      <div className="container">
        <div className="row">
      <form onSubmit={handleFormSubmit}>
        <fieldset>
        <div className="w-50 form-group">
        <label htmlFor="usernameinput" className="form-label mt-4">Username</label>
        <input
        id="usernameinput"
        className="form-control"
          placeholder="Your username"
          name="username"
          type="username"
          value={formState.username}
          onChange={handleChange}
          />
        </div>
        <div className="w-50 form-group">
        <label htmlFor="passwordinput" className="form-label mt-4">Password</label>
        <input
        id="passwordinput"
        className="form-control"
          placeholder="******"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
        />
        </div>
        <button className="m-2" type="submit">
          Submit
        </button>
        <Link to="/createprofile">
        <button>
          Sign Up
        </button>
        </Link>
        </fieldset>
      </form>
      </div>
      </div>
      
    );
  };

  return (
    <main>
      <h4 className="m-2">Login</h4>
      <div>
        {renderForm()}
        {error && <div>{error.message}</div>}
      </div>
    </main>
  );
};

export default Login;

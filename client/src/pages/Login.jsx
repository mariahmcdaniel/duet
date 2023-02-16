import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
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
      <form onSubmit={handleFormSubmit}>
        <fieldset>
        <div className="form-group">
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
        <div className="form-group">
        <label htmlFor="usernameinput" className="form-label mt-4">Username</label>
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
        <button type="submit">
          Submit
        </button>
        </fieldset>
      </form>
    );
  };

  return (
    <main>
      <h4>Login</h4>
      <div>
        {renderForm()}
        {error && <div>{error.message}</div>}
      </div>
    </main>
  );
};

export default Login;

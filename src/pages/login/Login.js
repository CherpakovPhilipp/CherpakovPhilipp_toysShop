import { connect } from 'react-redux';

import { Loader } from '../../components/loader';
import { loginUserService } from '../../services/userService';

import { setUser } from '../../store/user';

const { useState } = React;

export const LoginComponent = ({ dispatch }) => {
  const [submited, setSubmited] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    // setSubmited(true);

    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    loginUserService(data)
      .then((user) => {
        dispatch(setUser(user));
        // setSubmited(true);
      })
      .catch(er => {
        setError(er);
      });
  };

  return (
    submited ? <Loader />
      : (
        <form action="#" onSubmit={onSubmit}>
          <input
            type="text"
            name="email"
            required
            defaultValue="admin@a.com"
          />
          <br />
          <br />
          <input
            type="password"
            name="password"
            required
            defaultValue="admin"
          />
          <br />
          <br />

          <input type="submit" value="Login" />
          <span>{error}</span>
        </form>
      )
  );
};

export const Login = connect()(LoginComponent);

import { connect } from 'react-redux';

import { Loader } from '../../components/loader';
import { loginUserService } from '../../services/userService';
import { loginUserAsync, setUser } from '../../store/user';

const { useState, useEffect } = React;

export const LoginComponent = ({ dispatch, user }) => {
  const [submited, setSubmited] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setSubmited(true);

    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    dispatch(loginUserAsync(data));
  };

  return (
     (
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
          <div>{user.status.error}</div>
          <br />
          <input type="submit" value="Login" />
        </form>
      )
  );
};

const mapStateToProps = state => ({ user: state.user });

export const Login = connect(mapStateToProps)(LoginComponent);

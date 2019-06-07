import { connect } from 'react-redux';

import { Loader } from '../../components/loader';
import { loginUserAsync } from '../../store/user';

export const LoginComponent = ({ dispatch, user }) => {

  const onSubmit = (event) => {
    event.preventDefault();

    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    dispatch(loginUserAsync(data));
  };

  return (
      user.status.loading ? <Loader /> :
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

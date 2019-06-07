import { connect } from 'react-redux';

import { Navigation } from '../navigation';
import { removeUser } from '../../store/user';

import './header.scss';

export const HeaderComponent = ({ user, dispatch, info }) => {
  const onLogout = () => dispatch(removeUser());

  return (
    <header className="header">
      <div className="container">
        <Navigation info={info} user={user} onLogout={onLogout} />
      </div>
    </header>
  );
};

const mapStateToProps = state => ({
  user: state.user.data,
  info: state.info
});

export const Header = connect(mapStateToProps)(HeaderComponent);

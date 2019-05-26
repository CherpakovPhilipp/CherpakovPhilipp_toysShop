import { connect } from 'react-redux';

import { Public } from './Public';
import { Private } from './Private';

export const PagesComponent = ({ user, onLogin }) => {
  return user ? <Private user={user} /> : <Public onLogin={onLogin} />
}

const mapState = state => ({ user: state.user });

export const Pages = connect(mapState)(PagesComponent);
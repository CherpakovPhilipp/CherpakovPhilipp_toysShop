import { Navigation } from '../navigation';

import './header.scss';

export const Header = ({ user, onLogout }) => (
  <header className="header">
    <div className="container">
      <Navigation user={user} onLogout={onLogout} />
    </div>
  </header>
);

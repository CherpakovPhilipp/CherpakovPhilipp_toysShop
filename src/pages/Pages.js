import { Public } from './Public';
import { Private } from './Private';

export const Pages = ({ user, onLogin }) => {
  return user ? <Private user={user} /> : <Public onLogin={onLogin} />
}
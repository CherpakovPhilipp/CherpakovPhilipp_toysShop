import './navigation.scss';

export const Navigation = ({ list = [] }) => (
  <nav className="nav">
    <ul>
      {list.map(item => <li key={Math.random()}>{item}</li>)}
    </ul>
  </nav>
);

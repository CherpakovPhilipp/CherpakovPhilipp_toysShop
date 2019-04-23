import './navigation.scss';

export const Navigation = ({ list = [] }) => (
  <nav className="nav">
    <ul>
      {list.map(item => (
        <li key={item}>
          <a href={`/${item}`}>{item}</a>
        </li>
      ))}
    </ul>
  </nav>
);

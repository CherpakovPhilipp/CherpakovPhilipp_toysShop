import './navigation.scss';
import logoImg from './assets/images/logo.png';

export const Navigation = ({ list = [] }) => (
  <nav className="nav">
    <ul>
      <li>
        <img src={logoImg} alt="logo"/>
      </li>
      {list.map(item => (
        <li key={item}>
          <a href={`/${item}`}>{item}</a>
        </li>
      ))}
    </ul>
  </nav>
);

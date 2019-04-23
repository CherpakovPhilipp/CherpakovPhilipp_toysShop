import './usersList.scss';

const User = ({ firstName = 'Philipp', lastName = 'Cherpakov', age = 26 }) => (
  <div className="user">
    <div className="f_name">{firstName}</div>
    <div className="l_name">{lastName}</div>
    <div className="age">{age}</div>
  </div>
);

const Users = ({ users = [] }) => (
  <div className="users">
    {
    users.map(item => (
      <User
        key={item.id}
        firstName={item.firstName}
        lastName={item.lastName}
        age={item.age}
      />
    ))
  }
  </div>
);

export { User, Users };

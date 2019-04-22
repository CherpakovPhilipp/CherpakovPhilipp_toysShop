import './usersList.scss';

const CmpntName = ({ firstName = 'Philipp', lastName = 'Cherpakov', age = 26 }) => (
  <div className="user">
    <div className="f_name">{firstName}</div>
    <div className="l_name">{lastName}</div>
    <div className="age">{age}</div>
  </div>
);

const ListCmpntName = ({ users = [] }) => (
  <div className="users">
    {
    users.map(item => (
      <CmpntName
        key={item.id}
        firstName={item.firstName}
        lastName={item.lastName}
        age={item.age}
      />
    ))
  }
  </div>
);

export { CmpntName, ListCmpntName };

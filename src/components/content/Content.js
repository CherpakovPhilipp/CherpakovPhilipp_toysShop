import './content.scss';

const Error = ({ color = 'green', text = '' }) => (<mark style={{ color }}>{text}</mark>);

const menuItems = ['item1', 'item2', 'item3', 'item4', 'item5'];
const users = [
  {
    id: 1, firstName: 'Patrik', lastName: 'Simpson', age: 15
  },
  {
    id: 2, firstName: 'Teresa', lastName: 'Stefenson', age: 19
  },
  {
    id: 3, firstName: 'Jhon', lastName: 'Clinton', age: 26
  },
  {
    id: 4, firstName: 'Alex', lastName: 'Geits', age: 19
  },
  {
    id: 5, firstName: 'Max', lastName: 'Jobs', age: 33
  },
  {
    id: 6, firstName: 'Nick', lastName: '', age: 55
  },
  {
    id: 7, firstName: 'Martha', lastName: 'Uejn', age: 12
  },
  {
    id: 8, firstName: 'Cristine', lastName: 'Pitt', age: 45
  },
  {
    id: 9, firstName: 'Cristopher', lastName: 'Trump', age: 65
  }
];

const List = () => (
  <ul>
    {menuItems.map(item => <li key={Math.random()}>{item}</li>)}
  </ul>
);

const getNumbers = (from, to, isOdd) => {
  const arr = [];

  for (let i = +from; i <= +to; i++) {
    arr.push(i);
  }

  return (
    <ul>
      {arr
        .filter(item => ((isOdd) ? item % 2 : !(item % 2)))
        .map(item => <li>{item}</li>)
      }
    </ul>
  );
};

const ComponentName = ({ from = 0, to = 1, odd = true }) => getNumbers(from, to, odd);

const Greeting = ({ name = '' }) => {
  const dayTime = new Date().getHours();

  const greetName = (name) ? `, ${name}` : '';

  if (dayTime >= 3 && dayTime <= 12) {
    return (<span className="greeting">{`Good morning${greetName}!`}</span>);
  }
  if (dayTime > 12 && dayTime < 18) {
    return (<span className="greeting">{`Good afternoon${greetName}!`}</span>);
  }
  if (dayTime >= 18 && dayTime <= 22) {
    return (<span className="greeting">{`Good evening${greetName}!`}</span>);
  }

  return (<span className="greeting">{`Good night${greetName}!`}</span>);
};

const CmpntName = ({ firstName = 'Vasia', lastName = 'Petrov', age = 25 }) => (
  <div className="user">
    <div className="f_name">{firstName}</div>
    <div className="l_name">{lastName}</div>
    <div className="age">{age}</div>
  </div>
);

const ListCmpntName = ({ users = [] }) => (
  users.map(item => (
    <CmpntName
      key={item.id}
      firstName={item.firstName}
      lastName={item.lastName}
      age={item.age}
    />
  ))
);

export const Content = () => (
  <>
    <div className="content">Content</div>
    <Error text="Here is an error" />
    <List />
    <ComponentName odd from="3" to="10" />
    <Greeting name="Petia" />
    <CmpntName firstName="Mark" lastName="Twen" age="14" />
    <ListCmpntName users={users} />
  </>
);

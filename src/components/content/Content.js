import './content.scss';

const Error = props => (<mark style={{ color: props.color }}>{props.text}</mark>);

const menuItems = ['item1', 'item2', 'item3', 'item4', 'item5'];
const users = [
  { id: 1, name: 'Patrik', },
  { id: 2, name: 'Teresa' },
  { id: 3, name: 'Jhon' },
  { id: 4, name: 'Alex' },
  { id: 5, name: 'Max' },
  { id: 6, name: 'Nick' },
  { id: 7, name: 'Martha' },
  { id: 8, name: 'Cristine' },
  { id: 9, name: 'Cristopher' }
];

const List = () => (
  <ul>
    {menuItems.map(item => <li key={+(new Date())}>{item}</li>)}
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

const ComponentName = props => getNumbers(props.from, props.to, props.odd);

const Greeting = () => {
  const dayTime = new Date().getHours();

  if (dayTime >= 3 && dayTime <= 12) {
    return (<span className="greeting">Good morning!</span>);
  }; 
  if (dayTime > 12 && dayTime < 18) {
    return (<span className="greeting">Good afternoon!</span>);
  } ;
  if (dayTime >= 18 && dayTime <= 22) {
    return (<span className="greeting">Good evening!</span>);
  }
  
  return (<span className="greeting">Good night!</span>);
};

export const Content = () => (
  <>
    <div className="content">Content</div>
    <Error text="Here is an error" />
    <List />
    <ComponentName odd from="3" to="10" />
    <Greeting />
  </>
);

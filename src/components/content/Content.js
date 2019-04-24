import './content.scss';

import { NumbersList } from '../numbersList';
import { User, Users } from '../usersList';
import { Counter } from '../counter';

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
];

export const Content = () => (
  <div className="content">
    <User firstName="Mark" lastName="Twen" age="14" className="user" />
    <Users users={users} />
    <NumbersList odd from="1" to="10" />
    <Counter />
  </div>
);
